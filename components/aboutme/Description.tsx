import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allImages } from "./Items";
import RotatingImage, { RotateInterface } from "../rotating-images/RotatingImage";
import SelectedItem from "./SelectedItem";


const Description = () => {


    const [selectedTab, setSelectedTab] = useState<RotateInterface | null>(allImages[0]);


    return (
        <div className="w-[1200px] flex flex-col justify-center items-center">
            {allImages.map((item, i) => (


                <RotatingImage
                    key={`rot-${i}`}
                    className={`${item.className}`}
                    onClick={() => setSelectedTab(item)}
                    xRange={item.xRange}
                    yRange={item.yRange}
                    rotateRange={item.rotateRange}
                    size={item.size}
                    time={item.time}
                    src={item.src}
                />


            ))}
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={selectedTab ? selectedTab.className : "empty"}
                    animate={{ opacity: 1, scale: 1}}
                    initial={{ opacity: 0, scale: 0 }}
                    exit={{ opacity: 0, scale: 5 }}
                    transition={{ duration: 0.50, type:"spring", delay: .15 }}
                    className="flex justify-center items-center flex-col"
                >
                    {selectedTab && <SelectedItem src={selectedTab.src} />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Description;