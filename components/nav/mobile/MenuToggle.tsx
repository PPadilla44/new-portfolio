import { motion } from 'framer-motion'
import React from 'react'

const Path = (props: any) => (
    <motion.path
        strokeWidth="3.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    />
);

export const MenuToggle: React.FC<{ toggle: any }> = ({ toggle }) => (
    <button onClick={toggle} className="w-10 h-10 flex items-center justify-center">
        <svg width="30" height="25" viewBox="0 0 30 25"  className={"stroke-dark z-50"}>
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 28.25 2.5" },
                    open: { d: "M 3 21 L 20 3" }
                }}
            />
            <Path
                d="M 2 12.5 L 28.25 12.5"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 21.25 L 28.25 21.25" },
                    open: { d: "M 3 3 L 20 21" }
                }}
            />
        </svg>
    </button>
)
