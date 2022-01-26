import Link from 'next/link';
import React from 'react';
import Logo from '../logo/Logo';

export const Nav = () => {
    return (
        <nav className='h-16 w-full bg-light absolute left-0 top-0 flex justify-center z-50'>
            <div className="w-[1200px] flex justify-between item">
                <div className='mt-5'>
                    <Link href={"/"} scroll={false}>
                        <button>
                            <Logo />
                        </button>
                    </Link>
                </div>

                <div className='flex items-center gap-24 text-xl'>
                    <button>
                        <Link href={"/aboutme"} scroll={false}>
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