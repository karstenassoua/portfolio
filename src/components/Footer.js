import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="flex flex-col md:flex-row w-full bg-neutral-950 min-h-fit min-w-fit px-[15%] py-17 gap-10 justify-between">
                <div className="flex flex-col items-center md:items-start gap-3.5 ">
                    {/* left */}
                    <h1 className="text-3xl md:justify-left">Thank you for visiting!</h1>
                    <div className="flex flex-row gap-3.5 items-center">
                        <h2>Let's work together.</h2>
                        <div className="flex flex-row gap-3.5 min-h-fit min-w-fit fit-left">
                            {/* Icons */}
                            <Link href="https://www.linkedin.com/in/karstenassoua"><img src="/linkedin.png" alt="Karsten Assoua on Linkedin" className="w-6"/></Link>
                            <Link href="mailto:karstenassoua@gmail.com"><img src="/mail.png" alt="karstenassoua@gmail.com" className="w-6"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap md:flex-row gap-6.5 justify-center md:justify-left items-center">
                    {/* Selected Work */}
                    <Link href="/jwr">JWR Computing</Link>
                    <Link href="/pascal">Pascal</Link>
                    <Link href="/greencoin">Greencoin</Link>
                    <Link href="/pottery">Pottery @ Brown</Link>
                    <Link href="/">About Me</Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;