// pages/api/openai.js

import { sendOpenAi } from "@/libs/openai";

export default async function handler(req, res) {
  // Validasi hanya menerima metode POST
  if (req.method === "POST") {
    try {
      const { message } = req.body; // Pesan dari klien
      const response = await sendOpenAi(message);
      res.status(200).json(response); // Mengirimkan balasan dari OpenAI
    } catch (error) {
      console.error('Error interacting with OpenAI:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Jika metode tidak POST, kirimkan error 405
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
