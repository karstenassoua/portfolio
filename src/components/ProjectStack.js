import React from 'react';

const ProjectStack = ({ context, problem, solution, process, outcomes, reflection }) => {
    const sections = [
        { title: "Context", content: context },
        { title: "Problem", content: problem },
        { title: "Solution", content: solution },
        { title: "Process", content: process },
        { title: "Outcomes", content: outcomes },
        { title: "Reflection", content: reflection },
    ];

    return (
        <>
            <div className="flex flex-col max-w-4/6 gap-10 justify-self-center">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col md:flex-row min-w-3/4">
                        <div className="md:w-1/3">
                            <h2 className="font-bold">{section.title}</h2>
                        </div>
                        <div className="md:w-2/3">
                            <p>{section.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectStack;