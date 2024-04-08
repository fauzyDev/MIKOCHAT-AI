import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.SECRET_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true

  })
  
export async function sendOpenAi(message) {
  try{
      const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: message }],
          model: 'gpt-3.5-turbo',
      })

      return chatCompletion.choices[0];
    } catch (error) {
      console.error('Error: terjadi kesalahan', error)

      return error
    }
}