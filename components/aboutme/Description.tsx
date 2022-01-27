import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./Items";
import RotatingImage from "../rotating-images/RotatingImage";
import anime from "../../public/assets/pictures/anime.jpg"

const Description = () => {


    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="window">
            <nav>
                <ul>
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={item === selectedTab ? "selected" : ""}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <RotatingImage
                                    xRange={["50%", "100%", "50%", "0%", "75%", "50%"]}
                                    yRange={["50%", "25%", "100%", "75%", "100%", "50%"]}
                                    size={150}
                                    time={15}
                                    rotateRange={[0, 145, 35, 0]}
                                    src={anime}
                                    className={`h-[300px] w-[300px] left-10 cursor-pointer`} />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                    >
                        {selectedTab ? selectedTab.icon : "😋"}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default Description;