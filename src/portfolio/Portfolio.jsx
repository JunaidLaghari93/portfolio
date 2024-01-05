import React from 'react'
import javaScript from '../assets/skills/javascript.png';
import reactImg from '../assets/skills/react.png';
import expressImg from '../assets/skills/expressjs_logo.png';
import nodeImg from '../assets/skills/node.png';
import mongoDBImg from '../assets/skills/Mongodb-Transparent.png';
import tailwind from '../assets/skills/tailwind.png';

const Portfolio = () => {
  
    const skillImages = [
        {name: "JAVASCRIPT", img: javaScript, style: 'shadow-yellow-500'},
        {name: "REACT.js", img: reactImg, style: 'shadow-blue-600'},
        {name: "EXPRESS.js", img: expressImg, style: 'shadow-white'},
        {name: "NODE.js", img: nodeImg, style: 'shadow-green-500'},
        {name: "MONGODB", img: mongoDBImg, style: 'shadow-green-400'},
        {name: "TAILWIND", img: tailwind, style: 'shadow-sky-400'},
    ]

    return (
    <div name="Portfolio" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white h-max pt-40'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                <p className='py-6'>There are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center
            py-8 px-12 sm:px-0'>
                {skillImages.map((items, i) => {
                    return <div key={i} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${items.style}`}>
                    <img src={items.img} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{items.name}</p>
                </div>
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio