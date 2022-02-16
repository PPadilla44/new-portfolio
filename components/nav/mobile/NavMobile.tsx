import { motion, useCycle } from 'framer-motion'
import Link from 'next/link';
import React, { useRef } from 'react'
import Logo from '../../logo/Logo'
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

interface Props {
    page: string;
    isOpen: boolean;
    toggleOpen: any;
}


const navbar = {
    open: {
        height: "100vh",
        transition: {
            type: "spring",
            stiffness: 50,
            restDelta: 2
        }
    },
    closed: {
        height: "0vh",
        transition: {
            delay: 0.4,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const NavMobile: React.FC<Props> = ({ page, isOpen, toggleOpen }) => {

    const containerRef = useRef(null);

    const handleLogoClick = () => {
        if (isOpen) {
            toggleOpen();
        }
    }

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
            className='lg:hidden h-14 w-full absolute left-0 top-0 flex z-50 items-center bg-darkish'
        >

            <div className="w-full px-4 flex justify-between items-center">

                <Link href={"/"} scroll={false} passHref>
                    <button className='w-fit z-50' onClick={handleLogoClick}>

                        <Logo size='small' />
                    </button>
                </Link>

                <motion.div className='absolute top-0 px-4 left-0 w-screen bg-darkish' variants={navbar}>
                    <div className='flex justify-start pt-28'>
                        <Navigation page={page} toggle={toggleOpen} />
                        
                    </div>
                </motion.div>
                <MenuToggle toggle={toggleOpen} />

            </div>
        </motion.nav>
    )
}