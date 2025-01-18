import React, { useEffect, useState } from 'react';

const useTypewriter = (text, speed, pause = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let i = isDeleting ? text.length : 0;
        let timeout;

        const handleTyping = () => {
            if (isDeleting) {
                if (i > 0) {
                    setDisplayText(text.substring(0, i - 1));
                    i--;
                    timeout = setTimeout(handleTyping, speed / 2);  // Faster deletion
                }
            } else {
                if (i < text.length) {
                    setDisplayText(text.substring(0, i + 1));
                    i++;
                    timeout = setTimeout(handleTyping, speed);
                }
            }
        };

        handleTyping();

        return () => clearTimeout(timeout);
    }, [text, speed, isDeleting]);

    return { displayText, setIsDeleting };
};

export const TitleCarousel = ({ texts, speed = 100, pause = 1500 }) => {
    const [index, setIndex] = useState(0);
    const { displayText, setIsDeleting } = useTypewriter(texts[index], speed, pause);

    useEffect(() => {
        if (displayText === texts[index]) {
            const pauseTimeout = setTimeout(() => setIsDeleting(true), pause);
            return () => clearTimeout(pauseTimeout);
        } else if (displayText === '') {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
    }, [displayText, texts, pause]);

    return <div><h1 style={{fontSize:'50px'}}>{displayText}</h1></div>;
};
