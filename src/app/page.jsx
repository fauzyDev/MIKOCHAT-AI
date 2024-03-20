'use client'

import { useState } from "react";
import { sendOpenAi } from "@/libs/openai";

const Page = () => {
        const [input, setInput] = useState("")
        const [output, setOutput] = useState("")
        const [saveMessage, saveSetMessage] = useState([])
        const [isOutput, setIsOutput] = useState(false)

        const handleButton = async () => {
        const data = await sendOpenAi(input);
        const newMessage = { user: "SAYA", content: input }
        saveSetMessage([...saveMessage, newMessage])
        setOutput(data.message.content);
        setInput("");
        setIsOutput(true)
    }

    return (
        <div className="flex flex-col bg-slate-700 p-4 mb-4" style={{ minHeight: '100vh' }}>
            <h1 className="text-3xl font-bold text-center mb-8 text-white">MIKO AI</h1>
    
        {/* Pesan pengguna */}
        {saveMessage.map((messages, index) => (
        <div className="self-end mb-4" key={index}>
            <div className="bg-gray-200 text-black rounded-lg shadow-md p-2">
                <p className="font-bold">{messages.user}</p>
                <p>{messages.content}</p>
            </div>
        </div>
        ))}
    
        {/* Balasan dari MIKO AI */}
        {isOutput && (
            <div className="self-start mb-4">
                <div className="bg-blue-500 text-white rounded-lg shadow-md p-2 flex-grow">
                    <h3 className="text-left font-bold">MIKO AI</h3>
                    <p className="text-wrap">{output}</p>
                </div>
            </div>
        )}
    
        {/* Input dan tombol kirim */}
            <div className="bg-gray-600 rounded-lg shadow-lg p-4 mt-auto">
                <div className="flex flex-nowrap md:flex-row items-center">
            <input 
                type="text" 
                placeholder="Ketik pesan" 
                className="flex-grow px-4 py-2 mb-2 md:mb-0 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                style={{ minWidth: '0' }}/>

            <button 
                onClick={handleButton} 
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-2 lg:mt-2 ml-2">
                Kirim
                </button>
                </div>
            </div>
        </div>
    )
}

export default Page