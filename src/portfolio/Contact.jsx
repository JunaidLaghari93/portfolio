import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col h-full justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form method='POST' action='https://getform.io/f/7ac365fb-75ea-4cff-84de-bd1d08539943' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter Name' 
                    className='p-2 bg-transparent text-white focus:outline-none border-2 rounded-md'/>
                    <input type='text' name='email' placeholder='Enter Email' 
                    className='p-2 my-6 bg-transparent text-white focus:outline-none border-2 rounded-md'/>
                    <textarea name='message' rows="10" placeholder='Your Message Here' 
                    className='p-2 bg-transparent text-white focus:outline-none border-2 rounded-md'>

                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110
                    duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;


