import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {
    
    const myIcons = [
        {name: "Github", icon: <FaGithub size={30} />, href: 'https://github.com/JunaidLaghari93'},
        {name: "Mail", icon: <HiOutlineMail size={30} />, href: 'mailto:jalaghari93@gmail.com'},
        {name: "Resume", icon: <BsFillPersonLinesFill size={30} />, href: '/Junaid.pdf', style: 'rounded-br-md', download: true},
    ]

    return (
    <div className='hidden lg:flex flex-col fixed left-0 top-[35%]'>
        <ul >

            {myIcons.map( (items, i) => {
                return <li key={i} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500
                ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  ${items.style}`}>
                    <a href={items.href} className='flex justify-between items-center w-full text-white'
                    download={items.download} target='_blank' rel="noreferrer" >
                       {items.name} {items.icon}
                    </a>
                </li>
            })}

            
        </ul>
    </div>
  )
}

export default SocialLinks