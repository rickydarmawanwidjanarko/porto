import React, { useState, useEffect } from 'react';
interface TypingTextProps {
    text: string; // Tipe string untuk prop "text"
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
                setShowCursor(false); // Sembunyikan kursor selama teks masih diketik
            } else {
                clearInterval(interval);
                setShowCursor(true); // Tampilkan kembali kursor setelah teks selesai
                setTimeout(() => {
                    setDisplayText(''); // Mengatur ulang teks setelah selesai
                    setIndex(0);
                }, 1000); // Mengatur jeda sebelum mengulang
            }
        }, 100); // Ubah kecepatan pengetikan sesuai preferensi Anda
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
