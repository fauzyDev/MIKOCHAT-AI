import { sendOpenAi } from "@/libs/services/openai";

export async function POST(request) {
    try {
      const { message } = await request.json() 
      const response = await sendOpenAi(message);
      return Response.json({ reply: response })
    } catch (error) {
      console.error('Error interacting with OpenAI:', error);
      return Response.json({ error: 'Internal Server Error' });
    }
  }
