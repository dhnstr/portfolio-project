import React from 'react';
import educations from './data/educations.json';

const Education = () => {
    return (
        <div className="px-4 space-y-4 sm:space-y-7 bg-white dark:bg-neutral-900">
            <div className="max-w-[1040px] m-auto p-4 space-y-2 lg:space-y-3"> {/* Removed md:pl-20 */}
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-800 dark:text-neutral-100">
                        <p>Education</p>
                    </span>
                    <div className="grow border-t mx-4 border-neutral-800 dark:border-neutral-100"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
                    {educations.map((education, index) => (
                        <div
                            key={index}
                            className="rounded-lg px- py-3 md:px-5 md:py-4 border dark:border-0 border-neutral-200 dark:bg-zinc-800 text-lg space-y-0.5"
                        >
                            <p className="font-bold text-neutral-800 dark:text-neutral-100">
                                {education.school}
                            </p>
                            <p className="text-neutral-800 dark:text-neutral-200">
                                {education.degree}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                {education.fieldOfStudy}
                            </p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                {education.year}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
