import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900   ">
        <div className="relative max-w-5xl mx-auto px-4 py-6 sm:py-8 lg:py-10">
            <div className="space-y-1 lg:space-y-2">
            {/* Replace the hard-coded links below with your actual footer links */}
            <p className="text-sm text-neutral-800 dark:text-neutral-300">
                &copy; 2023 Dhnstr. All rights reserved
            </p>
            </div>
            <button
            onClick={scrollToTop}
            className="bg-white dark:bg-neutral-800 outline-neutral-200 dark:outline-neutral-700 outline-1 hover:outline-2 outline rounded-full p-2 mx-4 absolute right-0 top-1/2 -translate-y-1/2 text-neutral-700 dark:text-white"
            aria-label="Scroll to top"
            >
            <FiArrowUp />
            </button>
        </div>
        </footer>
    );
};

export default Footer;
