'use client'

import { useState, useEffect } from "react"

const TypingAnimation = ({ text }) => {
    const [displayText, setDisplayText] = useState("")

    useEffect(() =>{
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            setDisplayText(text.substring(0, currentIndex))
            currentIndex++;

            if (currentIndex > text.length) {
                clearInterval(typingInterval)
            }
        }, 50);
        
        return () => clearInterval(typingInterval)

    }, [text])

    return <>{displayText}</>
}

export default TypingAnimation