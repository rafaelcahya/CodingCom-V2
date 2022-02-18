import React from 'react'

import { Navbar } from '../../component/major/Navbar'
import { Footer } from '../../component/major/Footer'
import { Link } from 'react-router-dom'

import logo from '../../asset/Images/Standard Collection 0.png'

export const Tutorial = () => {
    return (
        <>
            <Navbar/>
            <div className='black flex flex-col gap-20 my-10 letter-spacing-1'>
                <p className='poppins-600 text-31 bg-gradient-purple-to-pink text-white text-center px-16 py-32'>Explore the new world of web development</p>
                <div className='poppins black flex flex-col items-center text-center gap-5 px-10'>
                    <p className='poppins-600 purple text-31'>Popular course</p>
                    <p className='text-16'>Many courses for you to learn web development. choose what you want</p>
                </div>
                <div className='poppins text-16 flex flex-wrap justify-center gap-10'>
                    <p>Basic internet</p>
                    <p>UI design</p>
                    <p>UX design</p>
                    <p>Frontend Development</p>
                    <p>Backend development</p>
                    <p>Database system</p>
                    <p>DevOps</p>
                </div>
                <div className='flex flex-col items-center gap-10'>
                    <div className='poppins flex flex-col md:flex-row items-start md:items-center gap-10 bg-white box-shadow px-16 py-10 rounded-xl w-[25rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem]'>
                        <div className='flex flex-col md:flex-row items-start gap-5'>
                            <img src={logo} alt="" width={40} />
                            <div className='flex flex-col gap-5'>
                                <p className='poppins-600 purple text-16'>Internet of Things</p>
                                <p className='text-14 w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className='flex gap-10 text-14'>
                            <p>100 min</p>
                            <p>10 pages</p>
                        </div>
                    </div>
                    <div className='poppins flex flex-col md:flex-row items-start md:items-center gap-10 bg-white box-shadow px-16 py-10 rounded-xl w-[25rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem]'>
                        <div className='flex flex-col md:flex-row items-start gap-5'>
                            <img src={logo} alt="" width={40} />
                            <div className='flex flex-col gap-5'>
                                <p className='poppins-600 purple text-16'>Internet of Things</p>
                                <p className='text-14 w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className='flex gap-10 text-14'>
                            <p>100 min</p>
                            <p>10 pages</p>
                        </div>
                    </div>
                    <div className='poppins flex flex-col md:flex-row items-start md:items-center gap-10 bg-white box-shadow px-16 py-10 rounded-xl w-[25rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem]'>
                        <div className='flex flex-col md:flex-row items-start gap-5'>
                            <img src={logo} alt="" width={40} />
                            <div className='flex flex-col gap-5'>
                                <p className='poppins-600 purple text-16'>Internet of Things</p>
                                <p className='text-14 w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className='flex gap-10 text-14'>
                            <p>100 min</p>
                            <p>10 pages</p>
                        </div>
                    </div>
                    <div className='poppins flex flex-col md:flex-row items-start md:items-center gap-10 bg-white box-shadow px-16 py-10 rounded-xl w-[25rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem]'>
                        <div className='flex flex-col md:flex-row items-start gap-5'>
                            <img src={logo} alt="" width={40} />
                            <div className='flex flex-col gap-5'>
                                <p className='poppins-600 purple text-16'>Internet of Things</p>
                                <p className='text-14 w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className='flex gap-10 text-14'>
                            <p>100 min</p>
                            <p>10 pages</p>
                        </div>
                    </div>
                    <div className='poppins flex flex-col md:flex-row items-start md:items-center gap-10 bg-white box-shadow px-16 py-10 rounded-xl w-[25rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem]'>
                        <div className='flex flex-col md:flex-row items-start gap-5'>
                            <img src={logo} alt="" width={40} />
                            <div className='flex flex-col gap-5'>
                                <p className='poppins-600 purple text-16'>Internet of Things</p>
                                <p className='text-14 w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className='flex gap-10 text-14'>
                            <p>100 min</p>
                            <p>10 pages</p>
                        </div>
                    </div>
                    <div className='poppins flex flex-col md:flex-row items-start md:items-center gap-10 bg-white box-shadow px-16 py-10 rounded-xl w-[25rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem]'>
                        <div className='flex flex-col md:flex-row items-start gap-5'>
                            <img src={logo} alt="" width={40} />
                            <div className='flex flex-col gap-5'>
                                <p className='poppins-600 purple text-16'>Internet of Things</p>
                                <p className='text-14 w-full'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className='flex gap-10 text-14'>
                            <p>100 min</p>
                            <p>10 pages</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}