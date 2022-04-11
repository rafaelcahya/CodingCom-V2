import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../component/major/Navbar';

import image from '../../asset/Images/Standard Collection 0.png'

export default function CaseStudyPage() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 black tracking-wide'>
                <div className='bg_gray2 flex flex-col items-center gap-10 text-center inter-700 text-[48px] md:text-[71px] py-16 px-5 md:px-16 lg:px-32'>
                    <span className='underline-animation text-[48px] md:text-[71px] capitalize'>Case study</span>
                    <p className='text_20 w-full sm:w-3/4 leading-loose'>A case study is a detailed study of a <span className='underline-animation'>specific subject</span>, such as a person, group, place, event, organization, or phenomenon. Case studies are commonly used in social, educational, clinical, and business research.</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-20 mx-10'>
                    <Link to="/case-study/challenge" className='flex flex-col gap-10 p-10 box-shadow rounded-xl w-[25rem]'>
                        <div className='flex flex-col gap-5'>
                            <img src={image} alt="" width={50} />
                            <p className='inter-700 text_20'>Challenge</p>
                            <p className='inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <p className='bg-purple text-white px-4 py-3 rounded-xl'>Challenge</p>
                    </Link>
                    <Link to="/case-study/certificate" className='flex flex-col gap-10 p-10 box-shadow rounded-xl w-[25rem]'>
                        <div className='flex flex-col gap-5'>
                            <img src={image} alt="" width={50} />
                            <p className='inter-700 text_20'>Certficate</p>
                            <p className='inter'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <p className='bg-purple text-white px-4 py-3 rounded-xl'>Challenge</p>
                    </Link>
                </div>
            </div>
        </>
    )
}