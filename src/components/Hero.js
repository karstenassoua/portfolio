"use client";
import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className='mx-55'>
            <div className="flex flex-col gap-3.5 my-10 pt-70 pb-20 text-left text-5xl text-neutral-400">
                <h1 className="">Karsten Assoua</h1>
                <h2>is a software developer and designer who loves building elegant solutions for complex problems.</h2>
                <div className="text-[20px]/7">
                    <p className=''>Currently studying <em>Computer Science</em> and <em>Behavioral Decision Sciences</em> @ <a href="https://www.brown.edu">Brown University</a></p>
                    <p className="">Previously @ <a href="https://www.clevelandfed.org/">United States Federal Reserve</a></p>
                </div>
            </div>
            <div
                className={`w-full h-48 place-items-end py-10`}
            >
                <img src='/images/mouse.png' alt="Scroll Indicator" className={`transition-opacity duration-300 ${
                    isVisible ? 'opacity-100 animate-bounce ease-in' : 'opacity-0'
                }`} />
            </div>
        </section>
    );
};

export default Hero;