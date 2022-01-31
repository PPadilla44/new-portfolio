import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';


interface Props {
    time: number;
    xRange: string[];
    yRange: string[];
    rotateRange: number[];
    size: number;
    src: string | StaticImageData;
    className?: string | undefined
}

const RotatingImage: React.FC<Props> = ({ time, xRange, yRange, rotateRange, size, src, className }) => {


    const variants: Variants = {

        float: {

            x: xRange,
            y: yRange,
            rotate: rotateRange,
            transition: {
                duration: time,
                repeat: Infinity,
                repeatType: 'loop',
            }

        },
        hover: {

            scale: [1, 1.8, 1.4],
            rotate: [null, 0],
            x: [null, "50%"],
            y: [null, "50%"],
            transition: {
                type: "spring",
                duration: 1,
            }

        },

    }



    return (
        <div className={`${className} absolute `}>

            <motion.div
                className="drop-shadow-3xl w-fit"
                variants={variants}
                animate={"float"}
                whileHover={"hover"}
            >

                <Image className='rounded-lg' src={src} alt={"anime"} objectFit='cover' width={"150px"} height={"150px"} />

            </motion.div>

        </div >
    );
};

export default RotatingImage;
