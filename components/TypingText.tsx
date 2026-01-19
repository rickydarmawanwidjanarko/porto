import React, { useState, useEffect } from 'react';
interface TypingTextProps {
    text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prevText) => prevText + text.charAt(index));
                setIndex(index + 1);
                setShowCursor(false);
            } else {
                clearInterval(interval);
                setShowCursor(true);
                setTimeout(() => {
                    setDisplayText('');
                    setIndex(0);
                }, 1000);
            }
        }, 300);
        return () => clearInterval(interval);
    }, [index, text]);

    return (
        <span>
            {displayText}
            {showCursor && <span className="blinking-cursor">|</span>}
        </span>
    );
};

export default TypingText;
