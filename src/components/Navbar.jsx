import React, {useState} from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () =>{

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)

    return(
        <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-3xl pl-2 pr-4'>LOGO</h1>
                    <ul className='hidden md:flex'>
                        <li><Link to="home" smooth={true} offset={50} duration={350}>Home</Link></li>
                        <li><Link to="about" smooth={true} offset={50} duration={350}>About</Link></li>
                        <li><Link to="tema" smooth={true} offset={50} duration={350}>Tema</Link></li>
                        <li><Link to="pricing" smooth={true} offset={50} duration={350}>Pricing</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent px-8 py-3 hover:text-indigo-600'>Daftar</button>
                    <button className='rounded-lg px-8 py-3 bg-red-600 shadow-lg text-white'>Masuk</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5'/>}
                    
                </div>
            </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} offset={50} duration={350}>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={50} duration={350}>About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="tema" smooth={true} offset={50} duration={350}>Tema</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={50} duration={350}>Pricing</Link></li>

            <div className='flex flex-col my-4'>
                <button className='border rounded-lg border-indigo-600 hover:text-indigo-600 bg-transparent px-8 py-3 mb-4'>Daftar</button>
                <button className='rounded-lg px-8 py-3 bg-red-600 shadow-lg text-white'>Masuk</button>
            </div> 
        </ul>
         
        </div>
    )
}

export default Navbar;