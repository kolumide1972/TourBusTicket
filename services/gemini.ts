
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStateTravelTips(stateName: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide 3 short, catchy travel tips for visiting ${stateName} State in Nigeria. Keep them brief and friendly.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text || "Discover the local culture and landmarks.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Explore the beauty and history of this historic region.";
  }
}
