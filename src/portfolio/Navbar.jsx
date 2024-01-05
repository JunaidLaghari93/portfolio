import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const navItems = [
        {name: "home", link: "home"},
        {name: "about", link: "about"},
        {name: "Portfolio", link: "Portfolio"},
        {name: "contact", link: "contact"}
        
    ]
    return (
    <>
        <div className='flex justify-between items-center w-full h-20 bg-black text-white px-4 fixed'>
            <div>
                <h3 className='text-5xl font-signature ml-2'>
                    <Link to='home' smooth duration={500} className='cursor-pointer' >
                        Junaid Laghari
                    </Link>   
                </h3>
            </div>
            <ul className='hidden md:flex gap-4'>
                {navItems.map((items, i) => {
                    return <li key={i} className='cursor-pointer capitalize font-medium 
                    text-gray-500 hover:scale-105 duration-200'> 
                        {/* <a href={items.link}> {items.name} </a>  */}
                        <Link to={items.link} smooth duration={500}>
                            {items.name}
                        </Link>
                    </li>
                })}
            </ul>
            <div onClick={() => {setToggle(!toggle)}} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
                { toggle ? <FaTimes size={30}/> : <FaBars size={30}/> }
            </div>
            { toggle && (
            <ul className='md:hidden flex flex-col text-gray-500 justify-center items-center absolute
            top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                {navItems.map((item, i) => {
                    return <li key={i} className='cursor-pointer capitalize text-4xl px-4 py-6'> 
                        {/* <a href={item.link}> {item.name} </a>  */}
                        <Link onClick={() => { setToggle(!toggle)}} to={item.link} smooth duration={500}>
                            {item.name}
                        </Link>
                    </li>
                })}
            </ul>
            )}
        </div>
    </>
  )
}

export default Navbar