import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../component/major/Navbar';

export default function CaseStudy() {
    return (
        <>
            <div className='pb-16'>
                <Navbar/>
            </div>
            <div className='tracking-wide'>
                <div className='bg-[#F8F8F9] dark:bg-[#09080c] duration-200 text-center poppins-600 text-[48px] md:text-[71px] py-16 px-5 md:px-16 lg:px-32'>
                    <span className='text-black dark:text-white duration-200 underline-animation text-[48px] md:text-[71px] capitalize'>Case study</span>
                </div>
                <div className='bg-white text-black dark:text-white dark:bg-[#111213] duration-200 flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-20 py-16'>
                    <Link to="/case-study/challenge"  className='bg-[#F8F8F9] dark:bg-[#09080c] flex flex-col gap-10 p-10 hover:bg-[#AB59FF] hover:text-white rounded-md shadow-[0_35px_100px_10px_#00000019] hover:shadow-[0_35px_100px_10px_#ac59ff4c] dark:hover:bg-[#AB59FF] duration-200 cursor-pointer transform hover:-translate-y-2 w-[25rem]'>
                        <div className='flex flex-col gap-5'>
                            <p className='poppins-600 text-[20px]'>Challenge</p>
                            <p className='poppins'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Link>
                    <Link to="/case-study/certificate" className='bg-[#F8F8F9] dark:bg-[#09080c] flex flex-col gap-10 p-10 hover:bg-[#AB59FF] hover:text-white rounded-md shadow-[0_35px_100px_10px_#00000019] hover:shadow-[0_35px_100px_10px_#ac59ff4c] dark:hover:bg-[#AB59FF] duration-200 cursor-pointer transform hover:-translate-y-2 w-[25rem]'>
                        <div className='flex flex-col gap-5'>
                            <p className='poppins-600 text-[20px]'>Certficate</p>
                            <p className='poppins'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}