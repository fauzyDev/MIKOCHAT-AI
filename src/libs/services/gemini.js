import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

export async function sendMessage(message) {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: message }]
            },
            {
                role: "model",
                parts: [{ text: "" }]
            }
        ]
    })
    
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}