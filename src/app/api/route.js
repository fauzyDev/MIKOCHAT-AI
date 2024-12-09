import { sendMessage } from "@/libs/services/gemini";
export async function POST(request) {
    try {
      const { message } = await request.json() 
      const response = await sendMessage(message);
      return Response.json({ data: response.response.text() })
    } catch (error) {
      console.error('Error interacting with GeminiAI:', error);
      return Response.json({ error: 'Internal Server Error' });
    }
  }


