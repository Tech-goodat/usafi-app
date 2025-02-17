import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { MdHome } from "react-icons/md";


const TopNav = () => {
const [isOpen, setIsOpen]=useState(false)
const [input, setInput]=useState({search:""})
const [darkMode, setDarkMode]=useState(false)

{/*function to toggle bars */}
const toggleButtons=()=>{
    setIsOpen(!isOpen)
}
/*function to toggle dark mode*/
const toggleDarkMode=()=>{
    setDarkMode(!darkMode)
    
}
/* function to control inputs for search*/
const handleInputChange=(e)=>{
    const {name, value}=e.target
    setInput({...input, [name]:value })
}

  return (
    <div className='flex w-full h-[45px]  bg-white items-center justify-between '>
        {/* SideNav toggle button */}
        <button onClick={toggleButtons} className='ml-5' >
            {isOpen? <IoIosClose size={25}/> :<FaBars size={18}/>}
        </button>
        {/* Logo */}
       <Link to='/'> <img src='src\assets\usafi_plus-removebg-preview.png' alt='logo' className='w-200px h-[40px]' /> </Link>
        {/*search bar*/}
        <form className='flex items-center justify-between rounded-full border border-gray-200 w-[500px]'>
            <input type='text' name='search' value={input.search} onChange={handleInputChange} placeholder='Search here...' className='text-[12px] ml-5 outline-none p-1.5'/>
            <button className='mr-5 cursor-pointer text-green-700'><IoIosSearch size={20}/></button>
        </form>
        <div className='flex  w-[300px] items-center gap-6 justify-center'>
            <Link to='/'><MdHome size={20} className='text-gray-600'/></Link>
            <Link className='text-gray-600' to='/notifications'><FaBell /></Link>
            <button className='text-gray-700 cursor-pointer ' onClick={toggleDarkMode}>{darkMode ? <MdOutlineDarkMode size={20}/> : <CiLight size={20}/>} </button>
            <Link to='/login'><button className='p-1.5 cursor-pointer flex items-center justify-center w-[85px] rounded-md text-white  text-sm bg-green-700'>Login <CiLogin className='ml-3 ' size={19}/></button></Link>
        </div>
    </div>
  )
}

export default TopNav
