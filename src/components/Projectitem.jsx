import React from 'react';

const Projectitem = ({ img, title, description, textClass }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full max-w-md shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#2d323e]'>
            <img src={img} alt='/' className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h3 className='font-bold text-white tracking-wider leading-tight mb-2'>
                    {title}
                </h3>
                <p className={`text-white ${textClass} leading-tight mb-2`}>{description}</p>
                <a href='/'>
                    <p className='p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm'>More Info</p>
                </a>
            </div>
        </div>
    );
};

export default Projectitem;
