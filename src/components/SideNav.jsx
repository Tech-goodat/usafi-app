import React from 'react'
import { Link } from 'react-router-dom'
import { IoInformationCircleOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";
import { FaBookReader } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


const SideNav = () => {
  return (
    <div className='flex flex-col gap-5   w-full h-full bg-gray-100 items-center'>
      <div className='flex w-full items-center   mt-10 ml-5  rounded-md   text-gray-600 font-bold text-sm'><Link className='flex w-full p-1 items-center hover:bg-green-200 hover:rounded-sm  hover:w-[180px] gap-2'  to='/about us'><IoInformationCircleOutline className='ml-2'/>About us</Link></div>
      <div className='flex w-full items-center ml-5  rounded-md   text-gray-600 font-bold text-sm'><Link className='flex w-full p-1 items-center hover:bg-green-200 hover:rounded-sm  hover:w-[180px] gap-2'  to='/Services'><LuClipboardCheck className='ml-2'/>Services</Link></div>
      <div className='flex w-full items-center ml-5  rounded-md   text-gray-600 font-bold text-sm'><Link className='flex w-full p-1 items-center hover:bg-green-200 hover:rounded-sm  hover:w-[180px] gap-2'  to='/Careers'><FaBookReader className='ml-2'/>Careers</Link></div>
      <div className='flex w-full items-center ml-5  rounded-md   text-gray-600 font-bold text-sm'><Link className='flex w-full p-1 items-center hover:bg-green-200 hover:rounded-sm  hover:w-[180px] gap-2'  to='/Sustainable projects'><AiFillProject className='ml-2'/>Sustainable projects</Link></div>
      <div className='flex w-full items-center ml-5  rounded-md   text-gray-600  font-bold text-sm'><Link className='flex w-full p-1 items-center hover:bg-green-200 hover:rounded-sm  hover:w-[180px] gap-2'  to='/contact'><MdContacts className='ml-2'/>Contact</Link></div>
      <div className='flex w-full items-center ml-5  rounded-md   text-gray-600 font-bold text-sm'><Link className='flex border border-gray-200 hover:shadow-none shadow-sm rounded-sm justify-center w-[180px] p-1 items-center hover:bg-green-300 hover:rounded-sm mt-[160px]  hover:w-[180px] gap-2'  to='/settings'><IoSettingsOutline className='ml-2'/>Settings</Link></div>
      
      
    </div>
  )
}

export default SideNav
