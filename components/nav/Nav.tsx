import React from 'react';
import Logo from '../logo/Logo';

export const Nav = () => {
    return (
        <nav className='h-16 w-full bg-light absolute left-0 top-0 flex justify-center'>
            <div className="w-[1200px] flex justify-between item">
                <Logo />
                
                <div className='flex items-center gap-24'>
                    <h3>About Me</h3>
                    <h3>Projects</h3>
                    <h3>Skills</h3>
                    <h3>Education</h3>
                </div>
            </div>
        </nav>
    );
};