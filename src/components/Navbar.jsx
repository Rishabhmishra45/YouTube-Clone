import React from 'react'
import Avatar from 'react-avatar';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";


import logo from '../assets/logo.png'
import user from '../assets/user.jpg'

function Navbar() {
    return (
        <div className='flex justify-between px-7 py-2'>
            <div className='flex items-center space-x-4'>
                <GiHamburgerMenu className='text-xl cursor-pointer' />
                <img src={logo} alt="logo" className='w-28 cursor-pointer' />
            </div>
            <div className='flex w-[35%] items-center'>

                <div className='w-[100%] px-3 py-2 border rounded-l-full'>
                    <input type="text" placeholder='Search' className='outline-none' />
                </div>

                <button className='px-4 py-2 border rounded-r-full bg-gray-100'>
                    <CiSearch size={"24px"} />
                </button>
                <IoMic size={"42px"} className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
            </div>
            <div className='flex items-center space-x-5 cursor-pointer'>
                <RiVideoAddLine className='text-2xl' />
                <AiOutlineBell className='text-2xl' />
                <Avatar src={user} size="32" round={true} />
            </div>
        </div>
    )
}

export default Navbar
