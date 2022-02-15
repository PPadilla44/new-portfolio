import React from 'react'
import Logo from '../logo/Logo'

export const NavMobile = () => {
    return (
        <nav className='sm:hidden h-14 w-full absolute left-0 top-0 flex z-50 items-center bg-darkish'>
            <div className="w-full px-4 sm:px-6 lg:px-0 lg:w-[1200px] flex justify-between items-center relative">

                <Logo size='small' />


                <svg width="30" height="25" viewBox="0 0 30 25" className='stroke-dark' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.875 2.625H28.125M1.875 22.625H28.125H1.875ZM1.875 12.625H28.125H1.875Z" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
        </nav>
    )
}