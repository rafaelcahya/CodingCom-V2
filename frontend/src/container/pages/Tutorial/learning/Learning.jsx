import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from '../../../component/major/Navbar'

import image from '../../../asset/Images/dummy-learning.jpg'

export default function Learning() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 letter_spacing_1'>
                <div className='inter-700 py-16 px-5 md:px-16 lg:px-32 w-4/5'>
                    <span className='underline-animation text-[48px] md:text-[71px]'>Global system of interconnected computer networks</span>
                </div>
                <div className='bg_gray2 flex flex-col gap-20 px-5 md:px-16 lg:px-32 py-10'>
                    <div className='flex flex-col gap-3'>
                        <p className='inter-600 text_25'>Basic Internet</p>
                        <p className='inter secondary_text text_14 leading-7 w-4/5 md:w-3/4'>The Internet (or internet) is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.</p>
                    </div>
                    <div className='inter grid grid-cols-2 gap-16'>
                        {
                            Array.from({length: 6}).map((_, i) => (
                                <Link to="/tutorial/learning/nama-coursenya" className='flex flex-col lg:flex-row gap-5 rounded-md hover:bg-white hover:shadow-xl p-3 duration-150'>
                                    <img src={image} alt="" className='rounded-md w-[240px]'/>
                                    <div className='flex flex-col w-full'>
                                        <div className='flex flex-col gap-3'>
                                            <p className='inter-800 uppercase red text_11 tracking-widest'>Internet</p>
                                            <p className='inter-700 text_20'>Basic internet</p>
                                            <p className='inter-600 text_14 secondary_text'>Basic internet</p>
                                        </div>
                                        <div className='flex items-center justify-between text_14 pt-5'>
                                            <p className='text-green-500 bg-green-100 px-2 py-1 rounded'>Easy</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
