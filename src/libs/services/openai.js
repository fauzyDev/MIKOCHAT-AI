import OpenAI from "openai"

const secretApi = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: secretApi
  })
  
export async function sendOpenAi(message) {
  try{
      const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: message }],
          model: "gpt-4o"
      })

      return chatCompletion.choices[0];
    } catch (error) {
      console.error('Error: terjadi kesalahan', error)
      return error
    }
}