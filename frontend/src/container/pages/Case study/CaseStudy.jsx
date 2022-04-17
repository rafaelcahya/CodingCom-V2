import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../component/major/Navbar';

import image from '../../asset/Images/Standard Collection 0.png'

export default function CaseStudy() {
    return (
        <>
            <Navbar/>
            <div className='tracking-wide'>
                <div className='bg-[#F8F8F9] dark:bg-[#09080c] duration-200 text-center inter-700 text-[48px] md:text-[71px] py-16 px-5 md:px-16 lg:px-32'>
                    <span className='text-black dark:text-white duration-200 underline-animation text-[48px] md:text-[71px] capitalize'>Case study</span>
                </div>
                <div className='bg-white text-black dark:text-white dark:bg-[#111213] duration-200 flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-20 py-16'>
                    <div className='bg-[#F8F8F9] dark:bg-[#09080c] flex flex-col gap-10 p-10 box-shadow rounded-xl w-[25rem]'>
                        <div className='flex flex-col gap-5'>
                            <img src={image} alt="" width={50} />
                            <p className='inter-700 text_20'>Challenge</p>
                            <p className='inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <Link to="/case-study/challenge" className='bg-[#AB59FF] text-white px-4 py-3 rounded-xl'>Challenge</Link>
                    </div>
                    <div className='bg-[#F8F8F9] dark:bg-[#09080c] flex flex-col gap-10 p-10 box-shadow rounded-xl w-[25rem]'>
                        <div className='flex flex-col gap-5'>
                            <img src={image} alt="" width={50} />
                            <p className='inter-700 text_20'>Certficate</p>
                            <p className='inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <Link to="/case-study/certificate"  className='bg-[#AB59FF] text-white px-4 py-3 rounded-xl'>Certificate</Link>
                    </div>
                </div>
            </div>
        </>
    )
}