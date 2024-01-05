import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='md:pb-8'>
                <p className='text-4xl font-bold inline border-b-4  border-gray-400'>
                    About
                </p>
            </div>
            <p className='text-lg'>
            I am a skilled MERN Stack Developer with strong expertise in React JS, Express JS, Node JS and 
            MongoDB. I have an outstanding proven track record of designing an innovative, dynamic, fully 
            responsive and pixel-perfect web applications with server side rendering connected to database. 
            </p>
        </div>
    </div>
  )
}

export default About