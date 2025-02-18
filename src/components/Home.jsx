// import React from 'react'
import { FaVideo } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full  md:h-screen w-full">
      <img src="/going green.png" alt="going green" className="w-[150px] mt-[60px]  md:mt-5 h-auto " />
      <h1 className="text-3xl md:text-5xl text-gray-600 font-bold text-center">Zero-to-Hero <span className="text-green-600">Waste</span></h1>
      <h1 className="text-3xl md:text-5xl font-bold text-center text-green-600">Management</h1>
      <div className="flex w-full items-center justify-center"><p className="text-center text-sm font-bold w-full md:w-[700px] text-gray-600 mt-4">“Going Green” is our daily anthem and approach to Waste Management and Disposal Services through technological innovations that focuses on
         sustainability, environment and safety.</p>
      </div>
      <button className="flex shadow-md cursor-pointer w-[200px] items-center justify-center text-white text-sm rounded-full bg-green-600 p-2 hover:bg-green-700 mt-6"><FaVideo size={20} className="mr-2"/>Watch Demo </button>
      
    </div>
  )
}

export default Home
