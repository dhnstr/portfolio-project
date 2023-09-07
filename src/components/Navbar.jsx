import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const closeNav = () => {
        setNav(false);
    };

    const linkClass = 'w-[120%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200';
    return (
        <div>
            <AiOutlineMenu
                size={30}
                onClick={() => setNav(!nav)}
                className='absolute top-4 right-4 z-[99] md:hidden'
            />
            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex justify-center items-center z-20'>
                    <div className='flex flex-col items-center'>
                        <Link
                            to='main'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className='w-[120%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                            onClick={closeNav} // Close the menu when a link is clicked
                        >
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </Link>
                        <Link
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className='w-[120%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                            onClick={closeNav}
                        >
                            <BsPerson size={20} />
                            <span className='pl-4'>About Me</span>
                        </Link>
                        <Link
                            to='work'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className='w-[120%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                            onClick={closeNav}
                        >
                            <MdOutlineWorkOutline size={20} />
                            <span className='pl-4'>Experience</span>
                        </Link>
                        <Link
                            to='project'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className='w-[120%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                            onClick={closeNav}
                        >
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Project</span>
                        </Link>
                        <Link
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className='w-[120%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                            onClick={closeNav}
                        >
                            <FiMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </Link>
                    </div>
                </div>
            ) : null}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col '>
                    <Link
                        to='main'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                    >
                        <AiOutlineHome size={20} />
                    </Link>
                    <Link
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                    >
                        <BsPerson size={20} />
                    </Link>
                    <Link
                        to='work'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                    >
                        <MdOutlineWorkOutline size={20} />
                    </Link>
                    <Link
                        to='project'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                    >
                        <AiOutlineProject size={20} />
                    </Link>
                    <Link
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'
                    >
                        <FiMail size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
