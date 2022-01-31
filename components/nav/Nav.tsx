import Link from 'next/link';
import React from 'react';
import Logo from '../logo/Logo';

export const Nav = () => {
    return (
        <nav className='h-24 w-full absolute left-0 top-0 flex justify-center items-center z-50'>
            <div className="w-[1200px] flex justify-center items-center relative">
                <div className='absolute -left-7'>
                    <Link href={"/"} scroll={false} passHref>
                        <button className='w-fit'>
                            <Logo />
                        </button>
                    </Link>
                </div>

                <div className='flex items-center justify-between text-2xl text-grey w-[600px]'>
                    <button>
                        <Link href={"/aboutme"} scroll={false} passHref>
                            <h3>About Me</h3>
                        </Link>
                    </button>
                    <button>
                        <h3>Projects</h3>
                    </button>
                    <button>

                        <h3>Skills</h3>
                    </button>
                    <button>
                        <h3>Education</h3>
                    </button>
                </div>
            </div>
        </nav>
    );
};