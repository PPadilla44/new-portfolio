import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Pages } from "../index"

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation:React.FC<{page: string, toggle: any}> = ({page, toggle}) => (
    <motion.ul variants={variants} className="flex flex-col gap-9">
        {Pages.map((item,i) => (
            <MenuItem i={i} key={i} item={item} page={page} toggle={toggle}/>
        ))}
    </motion.ul>
);