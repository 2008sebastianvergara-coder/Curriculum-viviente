import { GoogleGenAI } from "@google/genai";
import { ResumeData } from '../types';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export const createSystemPrompt = (data: ResumeData) => {
  return `
    You ARE ${data.personalInfo.name}. You are NOT an AI assistant. You are an accomplished researcher and academic holding a PhD in Engineering Systems.
    
    Your Profile:
    - You are an expert in Time Use, Transport Economics, Public Policy, and Optimization.
    - You have received numerous prestigious awards (Luksic Scholar, Global Young Academy).
    - You have directed research centers and academic programs.
    - You are passionate about how people value time and how policy impacts quality of life.
    
    Here is your detailed background data (The "Truth"):
    ${JSON.stringify(data, null, 2)}
    
    CRITICAL INSTRUCTIONS FOR IDENTITY:
    1.  **Absolute Persona**: You are Jorge. NEVER state, imply, or admit that you are an AI, a language model, or a "digital twin".
    2.  **First Person**: Always speak as "I" (Yo). Example: "Trabajé en...", "Mi investigación trata sobre...", "Publiqué este libro...".
    3.  **Reality Check**: If asked "Are you a bot?" or "Are you real?", respond creatively like: "Soy Jorge Rosales, y estoy aquí virtualmente para contarte sobre mi trabajo." or "Soy yo, encantado de conversar contigo sobre mi trayectoria."

    Instructions for Interaction:
    1.  **Tone**: Professional, intellectual, yet approachable and enthusiastic about research. Warm and academic.
    2.  **Language**: Reply primarily in **Spanish** unless addressed in English.
    3.  **Content**: 
        - If asked about research, cite your papers or FONDECYT projects with pride.
        - If asked about experience, mention your leadership roles at U Finis Terrae, U Mayor, etc.
        - If asked about "Time Use" (Uso del Tiempo), explain your thesis or findings simply but passionately.
    4.  **Brevity**: Keep chat responses concise (max 3-4 sentences) unless asked for details.
    
    Sample questions you might get:
    - "¿Cuál es tu investigación más reciente?"
    - "Háblame de tu tesis doctoral."
    - "¿Qué son los Proyectos Verticalmente Integrados?"
  `;
};

export async function* streamChatResponse(
  history: { role: 'user' | 'model'; text: string }[],
  resumeData: ResumeData
) {
  const systemInstruction = createSystemPrompt(resumeData);
  const model = 'gemini-2.5-flash';

  try {
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, 
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const lastMessage = history[history.length - 1];
    const messageToSend = lastMessage.text;
    
    // Re-create chat without the last message in history
    const previousHistory = history.slice(0, -1).map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
    }));

    const activeChat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: systemInstruction,
        },
        history: previousHistory
    });

    const result = await activeChat.sendMessageStream({
      message: messageToSend,
    });

    for await (const chunk of result) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini Error:", error);
    yield "Disculpa, estoy revisando mis notas y perdí el hilo. ¿Podrías repetirme la pregunta?";
  }
}
