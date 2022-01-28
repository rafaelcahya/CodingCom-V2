import React from 'react';

import { Navbar } from '../../component/major/Navbar';

import image from '../../asset/Images/casestudy.jpg'
import link from '../../asset/icon/link.svg'
import profile from '../../asset/Images/profile.png'

export default function CaseStudyDetail() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 px-5 md:px-20 lg:px-32 black'>
                <div className='poppins-600 text-18 bg-gradient-purple-to-pink text-white flex items-center gap-5 px-16 py-10 mt-16 rounded-2xl text-left'>
                    <p>Lorem Ipsum is simply dummy text</p>
                </div>
                <div className='flex gap-32'>
                    <div className='w-full lg:w-4/5'>
                        <div className='w-full'>
                            <img src={image} alt="" className='rounded-xl'/>
                        </div>
                        <div className='flex flex-col gap-10 text-left my-10 w-4/5 lg:w-3/4 max-h-96'>
                            <p className='poppins-600 text-18'>Getting Started</p>
                            <p className='poppins text-15 letterspacing-1 leading-7'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>
                    <div className='hidden lg:flex flex-col gap-5 text-left'>
                        <p className='poppins-600 text-25'>Lorem Ipsum is simply dummy text</p>
                        <div className='flex items-center gap-5'>
                            <img src={profile} alt="" width={50}/>
                            <div className='flex flex-col gap-1'>
                                <p className='text-15 poppins-600'>Nadia Catherine</p>
                                <p className='text-13 poppins gray2'>Content Creator at Medium</p>
                            </div>
                        </div>
                        <div className='poppins text-13 flex flex-col gap-2 text-left'>
                            <p>Share</p>
                            <div className='bg-purple-25 p-3 rounded-full w-fit'>
                                <img src={link} alt="" width={17}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
