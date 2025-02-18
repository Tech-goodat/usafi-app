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
            <div className="flex fixed top-0 z-50 w-full h-[50px] bg-white items-center justify-between shadow-md px-5">
                {/* SideNav Toggle Button */}
                <button onClick={toggleButtons} className="mr-2">
                    {isOpen ? <IoIosClose size={25} /> : <FaBars size={18} />}
                </button>

                {/* Logo */}
                <Link to="/">
                    <img src="/usafi_plus-removebg-preview.png" alt="logo" className="h-[40px]" />
                </Link>

                {/* Search Bar */}
                <form className="flex items-center justify-between rounded-full border border-gray-200 w-[500px] px-3">
                    <input
                        type="text"
                        name="search"
                        value={input.search}
                        onChange={handleInputChange}
                        placeholder="Search here..."
                        className="text-[12px] bg-transparent outline-none p-2 w-full"
                    />
                    <button className="cursor-pointer text-green-700">
                        <IoIosSearch size={20} />
                    </button>
                </form>

                {/* Right Side Icons */}
                <div className="flex items-center gap-6">
                    <Link to="/"><MdHome size={20} className="text-gray-600" /></Link>
                    <Link to="/notifications"><FaBell className="text-gray-600" /></Link>
                    <button className="text-gray-700 cursor-pointer" onClick={toggleDarkMode}>
                        {darkMode ? <MdOutlineDarkMode size={20} /> : <CiLight size={20} />}
                    </button>
                    <Link to="/login">
                        <button className="p-2 flex items-center justify-center w-[85px] rounded-md text-white text-sm bg-green-700">
                            Login <CiLogin className="ml-2" size={19} />
                        </button>
                    </Link>
                </div>
            </div>

            {/* SideNav */}
            <div className={`fixed left-0 top-[50px] h-screen w-[250px] bg-gray-100 shadow-sm transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
                <SideNav />
            </div>
        </div>
    );
};

export default TopNav;
