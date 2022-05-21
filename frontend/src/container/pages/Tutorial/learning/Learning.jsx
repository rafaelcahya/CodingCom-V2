import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from '../../../component/major/Navbar'

import image from '../../../asset/Images/dummy-learning.jpg'
import { Footer } from '../../../component/major/Footer'

export default function Learning() {
    return (
        <>
            <Navbar/>
            <div className='bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] duration-300'>
                <div className='poppins-600 py-16 px-5 md:px-16 w-11/12 tracking-wide'>
                    <span className='underline-animation text-[48px] md:text-[71px]'>Global system of interconnected computer networks</span>
                </div>
            </div>
            <div className='bg-white text-black dark:text-white dark:bg-[#09080c] duration-300'>
                <div className='flex flex-col gap-20 px-5 md:px-16 py-16'>
                    <div className='flex flex-col gap-3 tracking-wide'>
                        <p className='poppins-600 text-[25px]'>Basic Internet</p>
                        <p className='poppins text-[#7D7D7D] dark:text-[#b4b3b3] text-[14px] w-4/5 md:w-3/4 leading-[30px]'>The Internet (or internet) is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.</p>
                    </div>
                    <div className='poppins grid grid-cols-4 gap-8 tracking-wide'>
                        {
                            Array.from({length: 8}).map((_, i) => (
                                <Link to="/tutorial/learning/nama-coursenya" className='group flex flex-col gap-5 w-[325px] bg-white dark:bg-[#111213] p-4 border border-[#e9e8e8] dark:border-transparent rounded-md shadow-sm hover:shadow-md transform hover:-translate-y-1 duration-200'>
                                    <img src={image} alt="" className='h-[175px] rounded-md'/>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex justify-between items-center tracking-wide'>
                                            <p className='poppins-700 uppercase text-[13px] text-[#AB59FF]'>Internet</p>
                                            <p className='poppins-700 text-[13px] text-[#019267]'>Easy</p>
                                        </div>
                                        <p className='poppins-600 text-[16px] group-hover:text-[#AB59FF] duration-200'>Basic internet</p>
                                        <p className='poppins text-[13px] text-[#7D7D7D] dark:text-[#b4b3b3] leading-[30px]'>The Internet (or internet)[a] is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
