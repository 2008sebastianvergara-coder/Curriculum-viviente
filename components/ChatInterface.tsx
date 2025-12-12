import React, { useState, useRef, useEffect } from 'react';
import { ResumeData, ChatMessage } from '../types';
import { streamChatResponse } from '../services/geminiService';
import { Send, User, MessageCircle, Sparkles, Loader2, X, MessageSquare } from 'lucide-react';

interface ChatInterfaceProps {
  resumeData: ResumeData;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ resumeData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `¡Hola! Soy Jorge. Gracias por interesarte en mi perfil. Estoy aquí para contarte personalmente sobre mi investigación, mis clases o mi experiencia académica. ¿Qué te gustaría saber?`
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Prepare history for API
    const history = [...messages, userMsg].map(m => ({ role: m.role, text: m.text }));
    
    const botMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '', isStreaming: true }]);

    try {
      const stream = streamChatResponse(history, resumeData);
      
      let fullResponse = "";
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === botMsgId ? { ...msg, text: fullResponse } : msg
        ));
      }
      
      setMessages(prev => prev.map(msg => 
        msg.id === botMsgId ? { ...msg, isStreaming: false } : msg
      ));

    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-card border border-gray-700 w-[90vw] md:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 transition-all duration-300 animate-in slide-in-from-bottom-10 fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 border-b border-gray-700 flex justify-between items-center backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <img src={resumeData.personalInfo.avatarUrl} alt="Jorge" className="w-full h-full object-cover" />
                </div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute bottom-0 right-0 border border-dark"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Jorge Rosales-Salas</h3>
                <p className="text-xs text-primary">En línea ahora</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-md ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-gray-700 text-gray-100 rounded-bl-none border border-gray-600'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                  {msg.isStreaming && (
                    <span className="inline-block w-1.5 h-4 bg-primary ml-1 animate-pulse align-middle"></span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-card border-t border-gray-700">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe un mensaje..."
                className="w-full bg-dark border border-gray-600 rounded-full py-3 px-4 pr-12 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder-gray-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 p-2 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTyping ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-gray-700 text-gray-300' : 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 animate-bounce-small'
        } p-4 rounded-full transition-all duration-300 hover:scale-110 flex items-center gap-2 group`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-sm hidden group-hover:block transition-all max-w-0 group-hover:max-w-[150px] overflow-hidden whitespace-nowrap">
              Conversa conmigo
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default ChatInterface;