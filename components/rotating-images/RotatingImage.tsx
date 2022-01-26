import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';


interface Props {
    xTime: number;
    yTime: number;
    xRange: number;
    yRange: number;
    size: number;
    src: string | StaticImageData;
}

const RotatingImage: React.FC<Props> = ({ xTime, yTime, xRange, yRange, size, src }) => {

    const x = xRange + size;
    const y = yRange + size;


    return (
        <motion.div
            className="drop-shadow-3xl w-fit absolute top-0 left-0 blob-wrap" 
            animate={{ x: `calc(100vw - ${x}px)` }}
            transition={{ duration: xTime, repeat: Infinity, repeatType: "mirror" }}
            >     

            <motion.div
            animate={{ y: `calc(100vh - ${y}px)` }}
            transition={{ duration: yTime, repeat: Infinity, repeatType: "mirror" }}
            className=""
            >
            
                <Image className='rounded-lg' src={src} alt={"anime"} objectFit='cover' width={"150px"} height={"150px"} />
            
            </motion.div>
        </motion.div>
    );
};

export default RotatingImage;
