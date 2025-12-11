import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key is available to avoid runtime crashes on init
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (message: string, history: string[] = []): Promise<string> => {
  if (!ai) {
    console.warn("API Key not found for Gemini.");
    return "I'm sorry, I can't connect to the AI service right now. Please check the API configuration.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct a simple history context or system instruction
    const systemInstruction = `You are a helpful student assistant for KelasInovatif University. 
    You help prospective students with questions about courses, campus life, and admissions.
    Keep answers concise, friendly, and encouraging.
    The university emphasizes innovative learning, has 92% job placement, and was founded in 1850.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: message,
      config: {
        systemInstruction,
      }
    });

    return response.text || "I didn't catch that. Could you try asking again?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I'm having trouble thinking right now. Please try again later.";
  }
};