import React from 'react';
import Image from 'next/image';

const Project = ({projectName, heroImg, role, timeline, description, team, skills, tech}) => {
    return (
        <>
            <div className="flex flex-col gap-15 mx-30 py-27">
                <div className="flex flex-row items-center gap-20">
                    <div className='flex flex-col max-w-5/12'>
                        <h4 className='uppercase text-neutral-400 font-md'>{projectName}</h4>
                        <h2>{description}</h2>
                    </div>
                    <Image 
                        src={heroImg} 
                        alt="Portfolio image" 
                        className="hover:rotate-2 transition-transform max-w-7/12 rounded-2xl"
                        width={600}
                        height={350}
                    />
                </div>
                <div className='flex flex-row gap-10 justify-between'>
                    <div className='flex flex-col gap-3'>
                        <h3 className="uppercase text-neutral-400 font-light">Role</h3>
                        <p >{role}</p>
                    </div>
                    <div className='flex flex-col min-w-fit gap-3'>
                        <h3 className="uppercase text-neutral-400 font-light">Timeline</h3>
                        <p>{timeline}</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className="uppercase text-neutral-400 font-light">Team</h3>
                        <div>
                            {team.map(team => <p key={team}>{team}</p>)}
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className="uppercase text-neutral-400 font-light">Skills</h3>
                        <div>
                            {skills.map(skills => <p key={skills}>{skills}</p>)}
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 max-w-3/12'>
                        <h3 className="uppercase text-neutral-400 font-light">Technologies</h3>
                        <div className='flex flex-wrap gap-2'>
                            {tech.map(tech => <p key={tech} className='text-sm border-1 bg-neutral-900 border-neutral-500 rounded-md px-5 py-0.5 hover:bg-neutral-800'>{tech}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;