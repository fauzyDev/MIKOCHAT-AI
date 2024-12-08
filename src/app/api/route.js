import { sendMessage } from "@/libs/services/gemini";
export async function POST(request) {
    try {
      const { message } = await request.json() 
      const response = await sendMessage(message);
      return Response.json({ reply: response })
    } catch (error) {
      console.error('Error interacting with OpenAI:', error);
      return Response.json({ error: 'Internal Server Error' });
    }
  }


