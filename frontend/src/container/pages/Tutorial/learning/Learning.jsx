import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from '../../../component/major/Navbar'

import image from '../../../asset/Images/dummy-learning.jpg'
import love from '../../../asset/icon/heart.svg'
import comment from '../../../asset/icon/message-circle.svg'

export default function Learning() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 letter_spacing_1'>
                <div className='header flex flex-col gap-3 poppins-600 py-12 px-5 md:px-16 lg:px-32 w-full'>
                    <p className='text_25'>Basic Internet</p>
                </div>
                <div className='flex flex-col gap-10 px-5 md:px-16 lg:px-32'>
                    <div className='flex flex-col gap-3'>
                        <p className='poppins-600 text_20'>Basic Internet</p>
                        <p className='poppins secondary_text text_14 leading-7'>The Internet (or internet) is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.</p>
                    </div>
                    <div className='poppins grid grid-cols-1 xl:grid-cols-2 justify-center sm:justify-start gap-5 md:gap-10 text_16'>
                        {
                            Array.from({length: 6}).map((_, i) => (
                                <Link to="/tutorial/learning" className='flex flex-col md:flex-row gap-5 bg-white p-5 rounded-xl box-shadow w-fit box_shadow_2'>
                                    <img src={image} alt="" className='rounded-xl w-full md:w-[240px]'/>
                                    <div className='flex flex-col'>
                                        <div className='flex flex-col gap-5 pb-5 border-b'>
                                            <p className='poppins-600 blue'>Basic internet</p>
                                            <p className='secondary_text text_14 truncate_2 leading-7'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
                                        </div>
                                        <div className='flex items-center justify-between text_14 pt-5'>
                                            <p className='text-green-500 bg-green-100 px-2 py-1 rounded'>Easy</p>
                                            <div className='flex items-center gap-10 secondary_text'>
                                                <div className='flex items-center gap-2'>
                                                    <img src={love} alt="" />
                                                    <p>1k</p>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <img src={comment} alt=""/>
                                                    <p>1.5k</p>
                                                </div>
                                            </div>
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
