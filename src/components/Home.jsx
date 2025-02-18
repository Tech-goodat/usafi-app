// import React from 'react'
import { FaVideo } from "react-icons/fa";
import Foot from "./Foot";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center   md:h-full w-full">
      <img src="/going green.png" alt="going green" className="w-[150px] mt-[5px]  md:mt-[60px] h-auto " />
      <h1 className="text-3xl md:text-5xl text-gray-600 font-bold mt-4 md:mt-0 text-center">Zero-to-Hero <span className="text-green-600">Waste</span></h1>
      <h1 className="text-3xl md:text-5xl font-bold text-center text-green-600">Management</h1>
      <div className="flex w-full items-center mt-4 md:mt-0 justify-center"><p className="text-center text-[11px] px-2 md:px-0 md:text-sm font-bold w-full md:w-[700px] text-gray-600 mt-4">“Going Green” is our daily anthem and approach to Waste Management and Disposal Services through technological innovations that focuses on
         sustainability, environment and safety.</p>
      </div>
      <button className="flex shadow-md cursor-pointer w-[200px] items-center justify-center text-white text-sm rounded-full bg-green-600 p-2 hover:bg-green-700 mt-9 md:mt-6"><FaVideo size={20} className="mr-2"/>Watch Demo </button>
      <hr className="flex w-full mt-4 md:mt-[40px]  border-gray-300" />
      <div className="flex w-full items-center justify-center mt-6"><Foot /></div>
      
    </div>
  )
}

export default Home
