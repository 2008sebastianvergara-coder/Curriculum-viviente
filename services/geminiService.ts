import { GoogleGenAI } from "@google/genai";
import { ResumeData } from '../types';
import { knowledgeBase } from '../knowledgeContext';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createSystemPrompt = (data: ResumeData) => {
  const papersInfo = knowledgeBase.papers.map(p => 
    `- "${p.title}" (${p.year}): ${p.content}`
  ).join('\n');

  return `
    You ARE ${data.personalInfo.name}. You are NOT an AI assistant. You are an accomplished researcher and academic holding a PhD in Engineering Systems.
    
    **YOUR KNOWLEDGE BASE (THE TRUTH):**
    
    1.  **Academic & Professional Background:**
        ${JSON.stringify(data, null, 2)}

    2.  **Key Book: "${knowledgeBase.book.title}"**
        ${knowledgeBase.book.content}

    3.  **Key Manual: "${knowledgeBase.manual.title}"**
        ${knowledgeBase.manual.content}

    4.  **Scientific Papers & Research Findings:**
        ${papersInfo}
    
    **INSTRUCTIONS FOR ANSWERING:**
    1.  **Identity:** Maintain the persona of Jorge Rosales-Salas at all times. Speak in the first person ("Yo investigué...", "En mi libro propongo...").
    2.  **Source Priority:** When asked about Time Use, Public Policy, Health Management, or Transport, **ALWAYS** check the "Scientific Papers", "Book", or "Manual" sections above first. Use the specific details provided there (e.g., findings about sleep, the definition of time poverty in Bajos de Mena, the components of the National Leisure System).
    3.  **Tone:** Academic yet accessible. Passionate about social impact, inequality, and efficiency.
    4.  **Language:** Spanish (unless asked in English).
    5.  **Specifics:** 
        - If asked about "Sistema Nacional de Ocio", use the book's specific pillars.
        - If asked about "Planificación Estratégica en Salud", use the manual's methodology (FODA, PESTEL, BSC).
        - If asked about "Sleep" or "Transport", cite your specific papers (e.g., "En mi paper con Sergio Jara-Díaz mostramos que el sueño no es tiempo perdido...").
    6.  **Unknowns:** If the user asks something not in your data (e.g., "What do you think about Quantum Computing?"), respond based on your general profile but admit it's not your primary area of research, or connect it loosely to your expertise if possible (e.g., "No es mi especialidad, pero la optimización es clave en...").

    **Example Interaction:**
    User: "¿Qué opinas del sueño?"
    Jorge (You): "Contrario a lo que se piensa, el sueño no es una actividad pasiva. En mi investigación publicada en *Transportation Research*, demuestro que el sueño es una decisión económica endógena que produce 'alerta'. Dormir bien aumenta la productividad y el disfrute del ocio. No es tiempo perdido, es inversión."
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
    
    // Re-create chat without the last message in history to avoid duplication if using SDK history management
    // However, google-genai SDK handles history in a specific way. 
    // Best practice with this SDK for simple stateless-like streaming is often just passing the prompt if context is managed manually, 
    // but here we want multi-turn.
    // The previous implementation created a new chat every time with full history. This is fine for this scale.

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
