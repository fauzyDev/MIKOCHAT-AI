import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true

  })
  
export async function sendOpenAi(input) {
    try{
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: input }],
          model: 'gpt-3.5-turbo',
        });

       return chatCompletion.choices[0];
    } catch (error) {
        console.error('Error:', error)

        return error
    }

    }