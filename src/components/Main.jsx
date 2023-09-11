import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {BiLogoGmail} from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import resume from '../../src/assets/Resume.pdf'

export const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://cdn.discordapp.com/attachments/1086299204596547584/1148931104473104454/1692108277222.jpg' alt="Background"></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center text-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Dhanu Satrio Darjanto</h1>
                    <h2 className='flex sm:text-4xl text-xl pt-4 text-gray-800'>
                        I'm a{' '}
                        <TypeAnimation
                            sequence={[
                                'Developer',
                                1000,
                                'Coder',
                                1000,
                                'Programmer',
                                1000,
                                'Tech Enthusiast',
                                1000
                            ]}
                            wrapper='div'
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href='mailto:satriodhanu123@gmail.com' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                            <BiLogoGmail size={20} className='icon' />
                        </a>
                        <a href='https://www.facebook.com/dhanu.satriod' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                            <FaFacebookF size={20} className='icon' />
                        </a>
                        <a href='https://www.instagram.com/dhnstr_/' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                            <AiFillInstagram size={20} className='icon' />
                        </a>
                        <a href='https://www.linkedin.com/in/dhnstr/' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                            <FaLinkedin size={20} className='icon' />
                        </a>
                        <a href='https://github.com/dhnstr' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                            <FaGithub size={20} className='icon' />
                        </a>
                    </div>
                    <a href={resume} download='CV.pdf' className='cursor-pointer'>
                        <button className='dark:bg-neutral-900 hover:bg-neutral-600 text-white font-bold py-2 px-4 mt-5 rounded'>
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Main;
