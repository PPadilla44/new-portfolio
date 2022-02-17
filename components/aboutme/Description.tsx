import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allImages } from "./Items";
import RotatingImage from "./rotating-images/RotatingImage";
import { AboutMeItem } from "./Items";
import SelectedItem from "./SelectedItem";


const Description = () => {

    const [selectedTab, setSelectedTab] = useState<AboutMeItem | null>(allImages[0]);

    return (
        <div className="hidden px-4 sm:px-6 lg:px-0 w-full max-w-[1800px] h-full md:flex flex-col justify-center items-center relative">
            {allImages.map((item, i) => (

                <RotatingImage
                    key={`rot-${i}`}
                    className={`${selectedTab?.componentInfo!.key === item.componentInfo.key && "hidden"} ${item.componentInfo.className}`}
                    onClick={() => setSelectedTab(item)}
                    xRange={item.componentInfo.xRange}
                    yRange={item.componentInfo.yRange}
                    rotateRange={item.componentInfo.rotateRange}
                    size={item.componentInfo.size}
                    time={item.componentInfo.time}
                    src={item.componentInfo.src}
                />

            ))}
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={selectedTab ? selectedTab.componentInfo.className : "empty"}
                    animate={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    exit={{ opacity: 0, scale: .9 }}
                    transition={{ duration: 0.50, type: "spring" }}
                    className="flex gap-7 items-center flex-col max-w-[1200px] "
                >
                    {selectedTab &&
                        <SelectedItem
                            src={selectedTab.componentInfo.src}
                            description={selectedTab.description}
                            />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Description;