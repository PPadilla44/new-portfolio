import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const MenuItem: React.FC<{ i: number, item: any, page: string, toggle: any }> = ({ i, item, page, toggle }) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggle}
            className="text-grey "
        >
            <Link href={item.page} scroll={false} passHref key={`nav-${i}`}>
                <p className={`${page === item.page && "text-light underline"} cursor-pointer text-4xl `}>{item.title}</p>
            </Link>
        </motion.li>
    );
};
