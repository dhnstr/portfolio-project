import React from 'react'


const Workitem = ({year, title, duration, place,    details}) => {
    return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <il className='mb-16 ml-4'> 
            <div className='absolute w-3 h-3 bg-stone-200 rounder-full mt-1.5 -left-1.5 border-white'></div>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-neutral-600 bg-white'>{year}</span>
                <span className='text-lg font-bold text-neutral-600 dark:text-neutral-200'>{title}</span>
                <span className='my-1 text-sm font-semibold leading-none text-stone-500'>{duration}</span>
            </p>
            <p>
            <span className='my-1 text-sm font-semibold leading-none text-neutral-600 dark:text-neutral-200'>{place}</span>
            </p>
            <p>
            <span className='my-2 text-base font-normal text-neutral-600 dark:text-neutral-400'>{details}</span>
            </p>
        </il>
    </ol>
        
    )
}

export default Workitem