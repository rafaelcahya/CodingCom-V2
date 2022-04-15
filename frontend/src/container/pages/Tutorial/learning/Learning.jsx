import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from '../../../component/major/Navbar'

import image from '../../../asset/Images/dummy-learning.jpg'
import { Footer } from '../../../component/major/Footer'

export default function Learning() {
    return (
        <>
            <Navbar/>
            <div className='letter_spacing_1'>
                <div className='bg-[#F8F8F9] text-black dark:text-white dark:bg-[#09080c] duration-300'>
                    <div className='inter-700 py-16 px-5 md:px-16 lg:px-32 w-4/5'>
                        <span className='underline-animation text-[48px] md:text-[71px]'>Global system of interconnected computer networks</span>
                    </div>
                </div>
                <div className='bg-white text-black dark:text-white dark:bg-[#100e17] duration-300'>
                    <div className='flex flex-col gap-20 px-5 md:px-16 lg:px-32 py-16'>
                        <div className='flex flex-col gap-3'>
                            <p className='inter-600 text_25'>Basic Internet</p>
                            <p className='inter text-[#7D7D7D] dark:text-[#b4b3b3] text_14 leading-7 w-4/5 md:w-3/4'>The Internet (or internet) is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.</p>
                        </div>
                        <div className='inter flex flex-wrap gap-20'>
                            {
                                Array.from({length: 6}).map((_, i) => (
                                    <Link to="/tutorial/learning/nama-coursenya" className='flex flex-col gap-5 w-[325px] bg-white dark:bg-[#09080c] p-4 rounded-md dark:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] duration-200'>
                                        <img src={image} alt="" className='h-[175px] rounded-md'/>
                                        <div className='flex flex-col gap-3'>
                                            <div className='flex justify-between items-center tracking-widest'>
                                                <p className='inter-800 uppercase text_11 red'>Internet</p>
                                                <p className='inter text_14 green'>Easy</p>
                                            </div>
                                            <p className='inter-700 text_16'>Basic internet</p>
                                            <p className='inter text_14 text-[#7D7D7D] dark:text-[#b4b3b3] line-height-1 letter_spacing_1'>The Internet (or internet)[a] is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}
