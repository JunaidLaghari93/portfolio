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
                As a MERN Stack Developer, I bring a focused skill set to the table, 
                combining technical proficiency with a commitment to delivering impactful web solutions. 
                My expertise in HTML, CSS, JavaScript, React.js, Express.js, Node.js, MongoDB, 
                Tailwind CSS, and GitHub positions me as a valuable asset for any development 
                team seeking to create cutting-edge web applications.
            </p>
        </div>
    </div>
  )
}

export default About