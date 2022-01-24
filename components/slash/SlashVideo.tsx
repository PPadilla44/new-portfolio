import React, { Dispatch, MutableRefObject, SetStateAction, useRef, useState } from 'react';

interface Props {
    setPlayed: Dispatch<SetStateAction<boolean>>;
}

export const SlashVideo: React.FC<Props> = ({ setPlayed }) => {


    const videoRef = useRef(null)


    const handlePlay = () => {
        console.log("SET PLAYED TO TRUE");

        setPlayed(true);
        setTimeout(() => {

        }, 4000)
    }

    return (
        <video
            ref={videoRef}
            onPlay={(handlePlay)}
            className='w-full h-full object-cover absolute -z-10'
            autoPlay
            muted
            playsInline
            src="/assets/videos/slash.mp4"
        />
    );
};
