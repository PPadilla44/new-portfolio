import Link from 'next/link';
import React from 'react';
import Logo from '../logo/Logo';

interface Props {
    page: string;
}

export const Nav: React.FC<Props> = ({ page }) => {

    const pages = [
        { page: "/aboutme", title: "About Me" },
        { page: "/projects", title: "Projects" },
        { page: "/skills", title: "Skills" },
        { page: "/education", title: "Education" }
    ]

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

                    {
                        pages.map((item, i) => {
                            return (
                                    <Link href={item.page} scroll={false} passHref key={`nav-${i}`}>
                                        <p className={`${page === item.page && "text-light underline"} cursor-pointer`}>{item.title}</p>
                                    </Link>

                            )
                        })
                    }

                </div>
            </div>
        </nav>
    );
};
