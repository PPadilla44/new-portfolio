import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./Items";
import RotatingImage from "../rotating-images/RotatingImage";
import SelectedItem from "./SelectedItem";


const Description = () => {


    const [selectedTab, setSelectedTab] = useState(null);


    return (
        <div className="w-[1200px] flex flex-col justify-center items-center">
            {tabs.map((item, i) => (


                <RotatingImage
                    key={`rot-${i}`}
                    className={`${item === selectedTab ? "hidden" : ""} ${item.className}`}
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
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 5, delay: 1 }}
                    className="flex justify-center items-center flex-col"
                >
                    {selectedTab && <>
                        <SelectedItem src={selectedTab.src} />

                    </>
                    }
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Description;