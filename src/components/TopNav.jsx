import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { MdOutlineDarkMode, MdHome } from "react-icons/md";
import { CiLight, CiLogin } from "react-icons/ci";
import { useTheme } from '../context/ThemeContext';
import SideNav from './SideNav';

const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState({ search: "" });
    const { darkMode, toggleDarkMode } = useTheme();

    {/* Function to toggle the SideNav */ }
    const toggleButtons = () => {
        setIsOpen(!isOpen);
    };

    {/* Function to handle search input */ }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    return (
        <div className="w-full">
            {/* Top Navigation */}
            <div className="flex fixed top-0 z-50 w-full h-[50px] bg-white items-center justify-between  px-5">
                {/* SideNav Toggle Button */}
                <button onClick={toggleButtons} className="mr cursor-pointer">
                    {isOpen ? <IoIosClose size={25} /> : <FaBars size={18} />}
                </button>

                {/* Logo */}
                <Link className='flex items-center justify-center' to="/">
                    <img src="/usafi_plus-removebg-preview.png" alt="logo" className="h-auto w-[250px] ml-[14px] md:ml-0 sm:w-[150px] md:w-[55px] object-contain" />
                </Link>

                {/* Search Bar */}
                <form className="flex items-center justify-between md:rounded-full md:border border-gray-200 w-[500px] px-3">
                    <input
                        type="text"
                        name="search"
                        value={input.search}
                        onChange={handleInputChange}
                        placeholder={window.innerWidth < 640 ? "" : "Search here..."}
                        className="text-[12px] bg-transparent outline-none sm:w-auto p-2 w-full"
                    />
                    {window.innerWidth < 640 && <IoIosSearch size={25} className="text-green-700" />}
                    <button className="cursor-pointer hidden md-block text-green-700">
                        <IoIosSearch size={20} />
                    </button>
                </form>

                {/* Right Side Icons */}
                <div className="flex items-center gap-6">
                    <Link to="/"><MdHome size={20} className="hidden md:flex text-gray-600" /></Link>
                    <Link to="/notifications"><FaBell className="text-gray-600" /></Link>
                    <button className="text-gray-700 cursor-pointer" onClick={toggleDarkMode}>
                        {darkMode ? <MdOutlineDarkMode size={20} /> : <CiLight size={20} />}
                    </button>
                    <Link to="/login">
                        <button className="lg:p-2 p-1 flex items-center justify-center md:w-[85px] w-[50px] rounded-sm md:rounded-md text-white text-sm bg-green-700">
                            Login <CiLogin className="ml-2 hidden md:flex" size={19} />
                        </button>
                    </Link>
                </div>
            </div>

            {/* SideNav */}
            <div className={`fixed left-0 top-[50px] h-screen w-[200px] bg-gray-100 shadow-sm transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
                <SideNav />
            </div>
        </div>
    );
};

export default TopNav;
