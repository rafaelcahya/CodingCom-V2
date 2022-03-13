import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../component/major/Navbar';

import image from '../../asset/Images/Standard Collection 0.png'

export default function CaseStudyPage() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 black letter-spacing-1'>
                <div className='bg-gradient-purple-to-pink flex flex-col items-center gap-5 text-white px-16 py-16'>
                    <p className='poppins-600 text-31'>Case Study</p>
                    <p className='poppins text-center w-full sm:w-3/4'>A case study is a detailed study of a specific subject, such as a person, group, place, event, organization, or phenomenon. Case studies are commonly used in social, educational, clinical, and business research.</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20 lg:gap-20 mx-10'>
                    <Link to="/case-study/challenge" className='flex flex-col gap-10 p-10 box-shadow rounded-xl w-[25rem]'>
                        <div className='flex flex-col gap-5'>
                            <img src={image} alt="" width={50} />
                            <p className='poppins-700 text-20'>Challenge</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <p className='bg-purple text-white px-4 py-3 rounded-xl'>Challenge</p>
                    </Link>
                    <Link to="/case-study/certificate" className='flex flex-col gap-10 p-10 box-shadow rounded-xl w-[25rem]'>
                        <div className='flex flex-col gap-5'>
                            <img src={image} alt="" width={50} />
                            <p className='poppins-700 text-20'>Certficate</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <p className='bg-purple text-white px-4 py-3 rounded-xl'>Challenge</p>
                    </Link>
                </div>
            </div>
        </>
    )
}