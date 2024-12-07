'use client'

import React from "react";
// import { sendOpenAi } from "@/libs/openai";
import TypingAnimation from "@/libs/TypingAnimation";
import Image from "next/image";

const Page = () => {
    const [input, setInput] = React.useState("");
    const [message, saveSetMessage] = React.useState([]);
    const [isOutput, setIsOutput] = React.useState(false);
    const chatRef = React.useRef(null);

    React.useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [message])

    const handleButton = async () => {
        if (input.trim() === "") {
            return;
        }

        const data = await sendOpenAi(input);
        const newMessage = { user: "SAYA", content: input }
        const outputMessage = { ai: "MIKO AI", content: data.message.content }
        saveSetMessage([...message, newMessage, outputMessage])
        setInput("");
        setIsOutput(true);
    }

    const handlePress = async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            await handleButton();
        }
    }

    return (
        <>
            {/* Pesan pengguna & Balasan dari MIKO AI*/}
            <div ref={chatRef} className="flex flex-col flex-grow overflow-y-auto mb-4 p-4" style={{ scrollBehavior: 'smooth' }}>
            <div className="flex justify-center">
                <Image src="/miko.jpg" alt="" width={100} height={100} className="rounded-full border-2 border-sky-500 mb-2"/>
            </div>
            <h2 className="text-xl font-bold text-center mb-4 text-white">How can I help you today?</h2>
                {message.map((messages, index) => (
                    <div key={index} className={messages.user === "SAYA" ? "self-end mb-4" : "self-start"}>
                        <div className={messages.user === "SAYA" ? "bg-gray-200 text-black rounded-lg shadow-md px-4 py-2 flex-grow" : 
                            "bg-blue-500 text-white rounded-lg shadow-md px-4 py-2 flex-grow mb-4"}>
                            <p className="font-bold">{messages.ai === "MIKO AI" ? messages.ai : messages.user}</p>
                            {messages.ai === "MIKO AI" && isOutput ? <TypingAnimation text={messages.content} className="text-justify"/> : 
                            <p>{messages.content}</p> }
                        </div>
                    </div>
                ))}
            </div>

            {/* Input dan tombol kirim */}
            <div className="bg-gray-600 rounded-lg shadow p-4">
                <div className="flex flex-nowrap sm:flex-row items-center">
                    <input 
                        type="text" 
                        placeholder="Ketik pesan" 
                        className="flex-grow px-4 py-2 sm:mr-1 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handlePress} 
                        style={{ minWidth: '0' }}/>

                    <button 
                        onClick={handleButton} 
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ml-2">
                        Kirim
                    </button> 
                </div>
            </div>
        </>           
    )
}

export default Page