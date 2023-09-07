import React from 'react'
import Projectitem from './Projectitem'
import web1 from '../assets/web-1.jpeg'
import web2 from '../assets/web-2.jpeg'
import web3 from '../assets/web-3.jpg'
import web4 from '../assets/web-4.jpeg'
import web5 from '../assets/web-5.jpeg'


const Project = () => {
    return (
    <div id='project' className='flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16 px-4 bg-white dark:bg-neutral-900'>
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-7 mb-16'>
            <h1 className='text-4xl font-bold text-center  text-neutral-800 dark:text-neutral-100'>Projects</h1>
            <p className='text-center py-8 text-neutral-600 dark:text-neutral-400'>
            In my journey as a programmer, I've created projects and tackled bugs, all with the aim of making a dent in the digital universe. These experiences have been instrumental in my growth as a developer, allowing me to continually push boundaries and expand my skill set.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <Projectitem img={web3} title='Portfolio Website' description='ReactJs, Tailwind CSS'/>
                <Projectitem img={web1} title='Lingkar Budaya Web' description='Laravel, HTML, CSS, PHP'/>
                <Projectitem img={web4} title='Genetic Algorithm' description='Python'/>
                <Projectitem img={web5} title='FMM Prospect System' description='CodeIgniter, PHP, SQL Server'/>
                {/* <Projectitem img={} title=''/>
                <Projectitem img={} title=''/> */}
            </div>
        </div>
    </div>
    )
}

export default Project