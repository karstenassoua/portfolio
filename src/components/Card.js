import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Card = ({ image, projectName, url, skills, description, isAwarded, projectLink }) => {
    return (
        <a href={url} className="flex flex-col max-w-10/12 md:w-8/16 mx-2 my-2 transition-transform duration-300 hover:scale-102">
          <div className="">
                {/* Image Section */}
                <div className="h-40 min-w-65 lg:h-80">
                    <Image
                        src={image}
                        alt="Portfolio image"
                        width={600}
                        height={350}
                        className="w-full h-full rounded-2xl object-cover"
                    />
                </div>
                {/* Content Section */}
                <div className="p-4 flex-wrap">
                    <div className="flex flex-row gap-2 mb-3.5">
                        {/* Project features */}
                        <h3 className="text-xl font-bold capitalize">{projectName}</h3>
                        { isAwarded && <img src="/images/trophy.png" alt="Awarded" className="h-5 self-center" />}
                        { projectLink && <img src="/images/rocket.png" alt="Launched" className='h-5 self-center'/> }
                    </div>
                    <div className="flex flex-wrap lg:flex-row gap-2 lg:gap-5 text-sm text-neutral-500 mb-3">
                        {skills.map(skill => <p key={skill} className='border-1 bg-neutral-900 border-neutral-500 rounded-md px-5 py-1 hover:bg-neutral-800'>{skill}</p>)}
                    </div>
                    <p className="text-neutral-400">{description}</p>
                </div>
            </div>
        </a>
    );
};

export default Card;
