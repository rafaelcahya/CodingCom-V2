import React from 'react';
import { Footer } from '../../../../component/major/Footer';
import { Navbar } from '../../../../component/major/Navbar';

import chevron_left from '../../../../asset/icon/chevron-left.svg'
import clock from '../../../../asset/icon/clock.svg'
import calendar from '../../../../asset/icon/calendar.svg'
import link from '../../../../asset/icon/link.svg'

import profile from '../../../../asset/Images/profile.png'
import learning from '../../../../asset/Images/learning.png'
import NavbarMaterial from '../../components/major/NavbarMaterial';

export const Learning = () => {
    return (
        <>
            <div>
                <Navbar/>
                <NavbarMaterial/>
                    <div className='flex flex-col gap-20 px-5 md:px-20 lg:px-32 black'>
                        <div className='poppins-600 text-18 bg-gradient-purple-to-pink text-white flex items-center gap-5 px-16 py-6 mt-16 rounded-2xl text-left'>
                            <img src={chevron_left} alt="" className='border p-2 rounded-full'/>
                            <p>Internet of Things</p>
                        </div>
                        <div className='flex justify-between gap-20 w-full'>
                            <div className='hidden lg:flex flex-col gap-20 w-1/4'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex items-center gap-5'>
                                        <img src={profile} alt="" width={50}/>
                                        <div className='flex flex-col gap-1 text-left'>
                                            <p className='text-15 poppins-600'>Nadia Catherine</p>
                                            <p className='text-14 poppins gray2'>Content Creator at Medium</p>
                                        </div>
                                    </div>
                                    <div className='poppins text-14 flex flex-col gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <img src={clock} alt="" width={20}/>
                                            <p>10 mins to read</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <img src={calendar} alt="" width={20} />
                                            <p>19 January 2022</p>
                                        </div>
                                    </div>
                                    <div className='poppins text-14 flex flex-col gap-2 text-left'>
                                        <p>Share</p>
                                        <div className='bg-purple-25 p-3 rounded-full w-fit'>
                                            <img src={link} alt="" width={17}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 text-left text-15 border-r-2'>
                                    <p className='poppins-600 uppercase'>Learning materials</p>
                                    <div className='poppins flex flex-col gap-3'>
                                        <p className='lightblue bg-lightblue-15 rounded-lg px-4 py-2 w-fit'>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                        <p>Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-3/4'>
                                <img src={learning} alt="" className='w-full lg:w-4/5 rounded-xl'/>
                                <div className='black flex flex-col gap-10 text-left my-10 w-4/5 lg:w-3/4 max-h-96'>
                                    <p className='poppins-600 text-25'>Lorem ipsum dolo sit amet</p>
                                    <p className='poppins text-15 letterspacing-1 leading-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                    <p className='poppins text-15 letterspacing-1 leading-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </>
    )
};
