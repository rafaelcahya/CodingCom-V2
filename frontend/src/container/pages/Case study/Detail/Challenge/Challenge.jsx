import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from '../../../../component/major/Navbar'

import image from '../../../../asset/Images/learning.png'

function Challenge() {
    return (
        <>
            <Navbar/>
            <div className='letter-spacing-1'>
                <div className='bg-[#F8F8F9] text-black dark:text-white dark:bg-[#09080c] duration-200 inter-700 text-[48px] md:text-[71px] py-16 px-5 md:px-16 lg:px-32'>
                    <span className='underline-animation'>Challenge</span>
                </div>
                <div className='bg-white text-black dark:text-white dark:bg-[#111213] duration-200 inter flex flex-wrap gap-16 px-10 sm:px-20 py-16'>
                    {
                        Array.from({length: 5}).map((_, i) => (
                            <Link to="" className='group flex flex-col gap-5 w-[375px] bg-white dark:bg-[#09080c] p-4 rounded-md dark:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 duration-200'>
                                <img src={image} alt="" className='h-[200px] rounded-md'/>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex justify-between items-center tracking-widest'>
                                        <p className='inter-800 uppercase text-[11px] text-[#AB59FF]'>Internet</p>
                                        <p className='inter text_14 text-[#019267]'>Easy</p>
                                    </div>
                                    <p className='inter-700 text-[16px]'>Basic internet</p>
                                    <p className='inter text-[14px] text-[#7D7D7D] dark:text-[#b4b3b3] line-height-1 letter_spacing_1'>The Internet (or internet)[a] is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Challenge