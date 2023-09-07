import React from 'react';
import skills from './data/skills.json';

const Skill = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16 px-4 py-16 bg-white dark:bg-neutral-900">
            <div className="max-w-[1040px] m-auto p-4 space-y-2 lg:space-y-3"> {/* Removed md:pr-20 */}
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-800 dark:text-neutral-100">
                        <p>Skillset</p>
                    </span>
                    <div className="grow border-t mx-4 border-neutral-800 dark:border-neutral-100"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-neutral-400 dark:border-neutral-600 px-4 py-3 md:px-14 md:py-4 items-center justify-center"
                        >
                            <p className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
                                {skill.category}
                            </p>
                            <div className="grid grid-cols-1 mt-1 gap-3">
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
