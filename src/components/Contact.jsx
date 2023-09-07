import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16 px-4 bg-white dark:bg-neutral-900'>
            <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-0 mt-2'>
                <h1 className='py-4 text-4xl font-bold text-center text-neutral-800 dark:text-neutral-100'>Contact</h1>
                <form
                    action="https://getform.io/f/2e6ac70e-d6d0-47f1-8581-0ab3516f9174"
                    method='POST'
                    encType='multipart/form-data'>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col '>
                            <label className='uppercase text-sm py-2 text-neutral-600 dark:text-neutral-400'>Name</label>
                            <input className='border-2 rounded-lg p-3 flex border-white/70 bg-gray-200' type='text' name='name'></input>
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2 text-neutral-600 dark:text-neutral-400'>Phone Number</label>
                            <input className='border-2 rounded-lg p-3 flex border-white/70 bg-gray-200' type='text' name='phone'></input>
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 text-neutral-600 dark:text-neutral-400'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-white/70 bg-gray-200' type='email' name='email'></input>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 text-neutral-600 dark:text-neutral-400'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-white/70 bg-gray-200' type='text' name='subject'></input>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 text-neutral-600 dark:text-neutral-400'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 border-white/70 bg-gray-200' rows={10} name='message'></textarea>
                    </div>
                    {/* Add the submit button */}
                    <button type="submit" className='bg-gray-700 text-neutral-800 dark:text-neutral-100 mt-4 w-full p-4 rounded-lg'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
