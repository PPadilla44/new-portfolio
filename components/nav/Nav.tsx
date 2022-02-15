import Link from 'next/link';
import React from 'react';
import Logo from '../logo/Logo';
import { Pages } from "../index"

interface Props {
    page: string;
}

export const Nav: React.FC<Props> = ({ page }) => {

    return (
        <nav className='hidden h-24 w-full absolute left-0 top-0 sm:flex justify-center items-center z-50'>
            <div className='absolute hidden left-0 lg:block'>
                <Link href={"/"} scroll={false} passHref>
                    <button className='w-fit'>
                        <Logo />
                    </button>
                </Link>
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-0 lg:w-[1200px] flex justify-center items-center relative">


                <div className='flex items-center justify-between text-sm sm:text-2xl text-grey w-full lg:w-[800px]'>

                    {
                        Pages.map((item, i) => {
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
