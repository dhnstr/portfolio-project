import React from 'react';
import profileImage from '../assets/profile.jpg'; // Import your profile image

function About() {
    return (
        <div className="flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16 px-4 bg-white dark:bg-neutral-900">
            <div className="max-w-[1040px] m-auto p-4 space-y-2 lg:space-y-3">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100">
                    About me
                </h1>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mt-4">
                    <div className="grow md:pr-20">
                        <p className="text-neutral-600 dark:text-neutral-400 text-justify">
                            Hello, my name is Dhanu Satrio Darjanto. I live in Bekasi City, West Java, Indonesia.
                            I was someone who has been interested in the world
                            of computers and technology. I am currently a last-year informatics student, future mobile and web
                            developer. I am very interested in the world of technology, especially
                            in a mobile applications. My passion for mobile application brought
                            me to Telkom University. For the last 3 years, I studied many
                            programming languages such as Python, Golang, C++, HTML, CSS, PHP, JavaScript 
                            to improve my problem-solving skill. 
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-justify mt-2 mb-3">
                            I love to learn new things, write some code, listen to music, and
                            play video games.
                        </p>
                    </div>
                    <div id='about' className=" relative w-full rounded-lg overflow-hidden outline outline-4 outline-neutral-200 dark:outline-neutral-700 shadow ml-1">
                        <img
                            src={profileImage} // Use the imported profile image
                            alt="me making some bug"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
