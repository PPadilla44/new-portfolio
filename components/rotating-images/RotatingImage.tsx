import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';


export interface RotateInterface {
    time: number;
    xRange: string[];
    yRange: string[];
    rotateRange: number[];
    size: number;
    src: string | StaticImageData;
    className?: string | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    key: string;
}

const RotatingImage: React.FC<RotateInterface> = ({ time, xRange, yRange, rotateRange, size, src, className, onClick }) => {


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

        tap: {
            scale: 0,
        }

    }



    return (
        <div className={`${className} absolute`} onClick={onClick}>


                <motion.div
                    className="drop-shadow-3xl w-fit"
                    initial={{ scale: 1 }}
                    variants={variants}
                    animate={"float"}
                    whileHover={"hover"}
                    whileTap={"tap"}
                >

                    <Image className='rounded-lg' src={src} alt={"anime"} objectFit='cover' objectPosition="center" width={"150px"} height={"150px"} />

                </motion.div>

        </div >
    );
};

export default RotatingImage;
