import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="flex flex-row w-full justify-between mx-[3%] fixed z-10">
            <Link href="/">
                <Image 
                    src="/images/signature.svg" 
                    alt="Karsten!" 
                    width={50} 
                    height={25}
                    className="max-w-15 py-3" 
                />
            </Link>
            <div className='w-sm lg:border-1 border-neutral-800 bg-neutral-950 justify-self-center my-2.5 px-5 py-3 rounded-2xl'>
                <nav className="flex flex-row gap-7 justify-center text-neutral-500">
                    <Link href="/#projects">Projects</Link>
                    <Link href="/">About</Link>
                    <Link href="https://drive.google.com/uc?export=download&id=1IY0G42V3u7-O5kO3Dqj11DOsMajqjZPw">Resume</Link>
                </nav>
            </div>

        </header>
    );
};

export default Navbar;
