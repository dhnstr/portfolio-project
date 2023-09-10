import React from 'react';
import skills from './data/skills.json';

const Skill = () => {
    return (
        <div className="px-4 sm:space-y-7 bg-white dark:bg-neutral-900 py-16">
            <div className="max-w-[1040px] mx-auto p-4 lg:px-8 space-y-4 lg:space-y-7">
                <div className="flex items-center justify-between mb-4"> {/* Adjusted margin here */}
                    <span className="flex items-center gap-2 font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-800 dark:text-neutral-100">
                        <p>Skillset</p>
                    </span>
                    <div className="grow border-t mx-4 border-neutral-800 dark:border-neutral-100"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-800 rounded-lg border border-neutral-400 dark:border-neutral-600 px-4 py-3 md:px-5 md:py-4"
                        >
                            <p className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                                {skill.category}
                            </p>
                            <div className="grid grid-cols-2 mt-1 gap-1">
                                {skill.skills.map((skill, index) => (
                                    <p
                                        key={index}
                                        className="text-neutral-700 dark:text-neutral-400"
                                    >
                                        {skill}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
