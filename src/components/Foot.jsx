import React from 'react'
import { IoMdPin } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineStatusOnline } from "react-icons/hi";

const Foot = () => {
  return (
    <div className='h-[200px] flex flex-col w-full md:grid md:grid-cols-3 gap-4  bg-gradient-to-b from-inherit to-green-100 '>
      <div className='flex w-full items-center text-gray-600 h-full flex-col'>
        <h1 className='flex w-[200px] items-center justify-center font-bold text-lg '>Contact center</h1>
        <p className='flex w-full items-center justify-center text-[10px]'><IoMdPin size={20} className='mr-1'/>R.H. Devani Godown 21, Enterprise Road</p>
        <p className='flex w-full items-center justify-center text-[10px]'>Industrial Area, Nairobi, Kenya</p>
        <p className='flex w-full items-center justify-center text-[10px] mt-[10px]'> <IoPhonePortraitOutline size={20} className='mr-1'/>0728647096/ 0777283353/ 0719283353</p>
        <p className='flex w-full items-center justify-center mr-[60px] text-[10px] mt-[20px]'> <HiOutlineStatusOnline size={20} className='mr-1' />usafiplus[@]usafiplus.org</p>
      </div>
      <div className='flex w-full items-center text-gray-600 h-full flex-col'>
      <h1 className='flex w-[200px] items-center justify-center  font-bold text-lg  '>Quick Links</h1>
      <p className='flex w-full items-center justify-center text-[10px]'>Organization Overview</p>
      <p className='flex w-full items-center justify-center mt-5 text-[10px]'>Our team</p>
      <p className='flex w-full items-center justify-center mt-5 text-[10px]'>Awards</p>
      </div>
      <div className='flex w-full items-center text-gray-600 h-full flex-col'>
      <h1 className='flex w-[200px] items-center justify-center font-bold text-lg '>NewsLetter</h1>
      <p className='flex w-full items-center justify-center mt-2 text-[13px]'>Subscribe to our Exclusive Offers and News.</p>
      <form>
        <input type='text' className='w-[200px]  outline-none rounded-sm border text-[12px] p-1.5 border-gray-300 mt-2' placeholder='Enter your email...' />
        <button className='bg-green-400 text-gray-500 hover:bg-green-600 hover:text-gray-300 rounded-full items-center justify-center cursor-pointer w-[30px] h-[30px] ml-5 text-[10px] font-bold'>Go</button>
      </form>

      </div>
    </div>
  )
}

export default Foot
