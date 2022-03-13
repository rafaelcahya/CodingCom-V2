import React from 'react';

import NavbarMaterial from '../components/major/NavbarMaterial';
import { Footer } from '../../../component/major/Footer';
import { Navbar } from '../../../component/major/Navbar';

import download from '../../../asset/icon/download.svg'
import learning from '../../../asset/Images/learning.png'
import profile_image from '../../../asset/Images/profile.png'

export const Learning = () => {
    return (
        <>
            <Navbar/>
            <NavbarMaterial/>
                <div className='flex flex-col gap-20 my-10 letter-spacing-1 black'>
                    <div className='bg-gradient-purple-to-pink flex flex-col lg:flex-row items-start justify-between text-white px-10 md:px-16 py-20 text-left h-[25rem]'>
                        <p className='poppins-600 text-25'>Internet of Things</p>
                        <div className='poppins text-14 bg-white/30 flex items-center gap-2 px-3 py-2 rounded-xl w-fit'>
                            <img src={download} alt="" width={20}/>
                            <p>Download Syllabus</p>
                        </div>
                        <div className='poppins-300 text-12 flex lg:hidden flex-col gap-3 text-white'>
                            <p>Created by</p>
                            <div className='profiles'>
                                <div className='profiles-group'><img src={profile_image} alt="" /></div>
                                <div className='profiles-group'><img src={profile_image} alt="" /></div>
                                <div className='profiles-group'><img src={profile_image} alt="" /></div>
                                <div className='profiles-group'><img src={profile_image} alt="" /></div>
                            </div>
                            <p className='underline'>See all creators</p>
                        </div>
                    </div>
                    <div className='absolute top-[35rem] lg:top-[25rem] px-10 md:px-16'>
                        <div className='flex flex-col lg:flex-row justify-between gap-20 xl:gap-56'>
                            <div className='flex flex-col gap-24'>
                                <div className='poppins-300 text-12 hidden lg:flex flex-col gap-3 text-white'>
                                    <p>Created by</p>
                                    <div className='profiles'>
                                        <div className='profiles-group'><img src={profile_image} alt="" /></div>
                                        <div className='profiles-group'><img src={profile_image} alt="" /></div>
                                        <div className='profiles-group'><img src={profile_image} alt="" /></div>
                                        <div className='profiles-group'><img src={profile_image} alt="" /></div>
                                    </div>
                                    <p className='underline'>See all creators</p>
                                </div>
                                <div className='hidden lg:flex flex-col gap-10'>
                                    <p className='purple text-20 poppins-600'>Internet of things</p>
                                    <div className='flex flex-col gap-7'>
                                        {
                                            Array.from({length: 5}).map((_, i) => (
                                                <div className='poppins flex items-center justify-center gap-7'>
                                                    <p className='purple text-20 p-2'>{i++}</p>
                                                    <div className='flex flex-col gap-1'>
                                                        <p className='black'>Internet of things</p>
                                                        <p className='gray text-12'>100 min</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-10 leading-7'>
                                <div className='w-full md:w-[35rem] lg:w-[40rem] xl:w-[45rem]'>
                                    <img src={learning} alt=""/>
                                </div>
                                <p className='poppins-600 text-31 purple'>Internet of Things</p>
                                {
                                    Array.from({length: 2}).map((_, i) => (
                                        <p className='poppins text-14 w-full md:w-[35rem] lg:w-[40rem] xl:w-[45rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
};
