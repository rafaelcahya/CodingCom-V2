import React from 'react';
import { Navbar } from '../../component/major/Navbar';

import image from '../../asset/Images/casestudy.jpg'
import user_icon from '../../asset/icon/user.svg'
import { Link } from 'react-router-dom';

export default function CaseStudy() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 mx-5 md:mx-16 black'>
                <div className='bg-gradient-purple-to-pink flex flex-col items-center gap-5 text-white px-16 py-16 mt-16 rounded-2xl'>
                    <p className='poppins-600 text-31'>Case Study</p>
                    <p className='lato w-full sm:w-3/4'>A case study is a detailed study of a specific subject, such as a person, group, place, event, organization, or phenomenon. Case studies are commonly used in social, educational, clinical, and business research.</p>
                </div>
                <div className='flex flex-col gap-10 p-10 bg-slate-200/60 rounded-2xl text-left'>
                    <div className='flex flex-col gap-2'>
                        <p className='poppins-700 text-25 leading-7 letterspacing-1'>Case studies</p>
                        <p className='lato gray3 leading-7 letterspacing-1 w-full lg:w-1/2'>Many case studies are good for describing, comparing, evaluating and understanding different aspects of a research problem.</p>
                    </div>
                    <div className='poppins flex flex-col items-center gap-5 bg-white py-5 shadow-sm rounded-2xl'>
                        <p className='text-13 gray1'>Difficulty</p>
                        <div className='flex gap-10'>
                            <p>All</p>
                            <p>Easy</p>
                            <p>Medium</p>
                            <p>Hard</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
                        <Link to="/case-study/detail">
                            <div className='card card_anim bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-md shadow-slate-200 duration-200 cursor-pointer'>
                                <img src={image} alt="" className='rounded-xl'/>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-gray-200 p-3 rounded-full'>
                                        <img src={user_icon} alt="" width={15}/>
                                    </div>
                                    <p className='poppins-600 text-15 text-left'>Lorem Ipsum is simply dummy text</p>
                                </div>
                                <p className='lato gray2 leading-7 letterspacing-1 text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <p className='text-left green poppins-700 text-13'>Easy</p>
                            </div>
                        </Link>
                        <Link to="/case-study/detail">
                            <div className='card card_anim bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-md shadow-slate-200 duration-200 cursor-pointer'>
                                <img src={image} alt="" className='rounded-xl'/>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-gray-200 p-3 rounded-full'>
                                        <img src={user_icon} alt="" width={15}/>
                                    </div>
                                    <p className='poppins-600 text-15 text-left'>Lorem Ipsum is simply dummy text</p>
                                </div>
                                <p className='lato gray2 leading-7 letterspacing-1 text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <p className='text-left green poppins-700 text-13'>Easy</p>
                            </div>
                        </Link>
                        <Link to="/case-study/detail">
                            <div className='card card_anim bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-md shadow-slate-200 duration-200 cursor-pointer'>
                                <img src={image} alt="" className='rounded-xl'/>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-gray-200 p-3 rounded-full'>
                                        <img src={user_icon} alt="" width={15}/>
                                    </div>
                                    <p className='poppins-600 text-15 text-left'>Lorem Ipsum is simply dummy text</p>
                                </div>
                                <p className='lato gray2 leading-7 letterspacing-1 text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <p className='text-left green poppins-700 text-13'>Easy</p>
                            </div>
                        </Link>
                        <Link to="/case-study/detail">
                            <div className='card card_anim bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-md shadow-slate-200 duration-200 cursor-pointer'>
                                <img src={image} alt="" className='rounded-xl'/>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-gray-200 p-3 rounded-full'>
                                        <img src={user_icon} alt="" width={15}/>
                                    </div>
                                    <p className='poppins-600 text-15 text-left'>Lorem Ipsum is simply dummy text</p>
                                </div>
                                <p className='lato gray2 leading-7 letterspacing-1 text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <p className='text-left green poppins-700 text-13'>Easy</p>
                            </div>
                        </Link>
                        <Link to="/case-study/detail">
                            <div className='card card_anim bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-md shadow-slate-200 duration-200 cursor-pointer'>
                                <img src={image} alt="" className='rounded-xl'/>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-gray-200 p-3 rounded-full'>
                                        <img src={user_icon} alt="" width={15}/>
                                    </div>
                                    <p className='poppins-600 text-15 text-left'>Lorem Ipsum is simply dummy text</p>
                                </div>
                                <p className='lato gray2 leading-7 letterspacing-1 text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <p className='text-left green poppins-700 text-13'>Easy</p>
                            </div>
                        </Link>
                        <Link to="/case-study/detail">
                            <div className='card card_anim bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-md shadow-slate-200 duration-200 cursor-pointer'>
                                <img src={image} alt="" className='rounded-xl'/>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-gray-200 p-3 rounded-full'>
                                        <img src={user_icon} alt="" width={15}/>
                                    </div>
                                    <p className='poppins-600 text-15 text-left'>Lorem Ipsum is simply dummy text</p>
                                </div>
                                <p className='lato gray2 leading-7 letterspacing-1 text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <p className='text-left green poppins-700 text-13'>Easy</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
