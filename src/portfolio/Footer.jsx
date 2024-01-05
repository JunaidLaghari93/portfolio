import React from 'react'

const Footer = () => {
  return (
    <div className='w-full md:h-20 bg-gradient-to-b from-black 
    to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex justify-center items-center w-full h-full'>
            <div className='flex gap-2'>
                <h3>Email : </h3>
                <p> <a href='https://mail.google.com' target='_blank' rel="noreferrer"> jalaghari93@gmail.com </a> </p>
            </div>
        </div>
    </div>
  )
}

export default Footer