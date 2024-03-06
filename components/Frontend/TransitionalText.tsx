"use client";
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function TransitionalText({TEXTS}:{TEXTS:string[]}) {
    
    const [index, setIndex] = React.useState(0);
    
    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          4000, // every 3 seconds
        );
        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <span>
            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </span>
    );
}
