import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { wrap } from "popmotion";
import { allImages } from '../Items';
import SelectedItem from '../SelectedItem';
import RotatingImage from '../rotating-images/RotatingImage';

const variants: Variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const DescriptionMobile = () => {

    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, allImages.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const prevImage = () => {
        let newIndex = imageIndex - 1;
        return newIndex >= 0 ? newIndex : allImages.length - 1
    }

    const nextImage = () => {
        let newIndex = imageIndex + 1;
        return newIndex < allImages.length ? newIndex : 0
    }


    return (
        <div className=' px-4 sm:px-6 text-lighter w-screen h-screen md:hidden flex justify-center'>
            <AnimatePresence initial={false} custom={direction}>

                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="flex gap-7 items-center flex-col absolute mt-20"
                >
                    <SelectedItem
                        src={allImages[imageIndex].componentInfo.src}
                        description={allImages[imageIndex].description}
                    />

                </motion.div>
            </AnimatePresence>
            <div
                className="top-1/4 right-28 absolute flex justify-center items-center select-none z-10"
                >
                <RotatingImage
                    key={`rot-right`}
                    // className={``}
                    onClick={() => paginate(1)}
                    xRange={ ["50%", "100%", "50%", "0%", "75%", "50%"]  }
                    yRange={ ["50%", "25%", "100%", "75%", "100%", "50%"] }
                    rotateRange={allImages[nextImage()].componentInfo.rotateRange}
                    size={allImages[nextImage()].componentInfo.size}
                    time={allImages[nextImage()].componentInfo.time}
                    src={allImages[nextImage()].componentInfo.src}
                />
            </div>
            <div className="top-1/4 left-0 absolute flex justify-center items-center select-none z-10">
                <RotatingImage
                    key={`rot-Left`}
                    // onClick={() => setSelectedTab(item)}
                    onClick={() => paginate(-1)}
                    xRange={ ["50%", "75%", "50%", "0%", "75%", "50%"] }
                    yRange={ ["50%", "25%", "50%", "75%", "25%", "50%"] }
                    rotateRange={allImages[prevImage()].componentInfo.rotateRange}
                    size={allImages[prevImage()].componentInfo.size}
                    time={allImages[prevImage()].componentInfo.time}
                    src={allImages[prevImage()].componentInfo.src}
                />
            </div>



        </div>
    )
}

export default DescriptionMobile