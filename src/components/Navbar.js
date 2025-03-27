import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="flex flex-row w-full justify-between mx-10 fixed z-10">
            <Link href="/">
                <img className="max-w-15 py-3" src="/images/signature.svg"></img>
            </Link>
            <div className='w-sm border-1 border-neutral-800 bg-neutral-950 justify-self-center my-2.5 px-5 py-3 rounded-2xl'>
                <nav className="flex flex-row gap-7 justify-center text-neutral-500">
                    <Link href="#projects">Projects</Link>
                    <Link href="/">About</Link>
                    <Link href="https://docs.google.com/document/d/16F6QSZDSs6JDtbOYbUdO-ZMzgEy1CNVLlFRsBYhtHX4/export?format=pdf">Resume</Link>
                </nav>
            </div>

        </header>
    );
};

export default Navbar;