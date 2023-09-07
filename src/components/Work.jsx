import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: 2022,
        title: 'Mathematic Discrete Asistant Lecturer',
        duration: 'Jun 2022 - Sept 2022',
        details: 'Conducting task evaluation and summarization, performing testing on online quiz questions,and assisting and answering student questions on an online forum.'
    },
    {
        year: 2023,
        title: 'Practicum Assistant for Computer Network',
        duration: 'Mar 2023 - Jun 2023',
        details: 'Conducting assessments on laboratory journals, explaining laboratory materials, providing assistance to students during major assignments'
    },
    {
        year: 2023,
        title: 'Practicum Assistant for Operating System',
        duration: 'Mar 2023 - Jun 2023',
        details: 'Conducting assessments on laboratory journals, explaining laboratory materials, providing assistance to students during major assignments'
    },
    {
        year: 2023,
        title: 'IT Deveplopment',
        duration: 'Aug 2023 - Sept 2023',
        details: 'Troubleshooting web applications Using CodeIgniter framework, created and developed a CRUD login system for an enterprise project using CodeIgniter framework.'
    },
]
const Work = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16 px-4 bg-white dark:bg-neutral-900 '>
            <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-12 mb-10'>
                <h1 className='text-4xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-5' >Work Experience</h1>
                {data.map((item, idx)=> (
                    <Workitem 
                    key={idx} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Work