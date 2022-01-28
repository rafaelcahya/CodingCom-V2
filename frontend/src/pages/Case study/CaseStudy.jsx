import React from 'react';
import { Navbar } from '../../component/major/Navbar';

import image from '../../asset/Images/casestudy.jpg'
import user_icon from '../../asset/icon/user.svg'
import { Link } from 'react-router-dom';

export default function CaseStudy() {
    return (
        <div>
            <Navbar/>
            <div className='flex flex-col gap-20 px-5 md:px-20 lg:px-32 black'>
                <div className='poppins-600 text-25 bg-gradient-purple-to-pink text-white flex items-center gap-5 px-16 py-16 mt-16 rounded-2xl text-left'>
                    <p>Case Study</p>
                </div>
                <div className='flex flex-col items-center gap-5 bg-white py-5 shadow-sm rounded-2xl'>
                    <p className='poppins text-13 gray1'>Difficulty</p>
                    <div className='flex gap-10'>
                        <p>All</p>
                        <p>Easy</p>
                        <p>Medium</p>
                        <p>Hard</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-16'>
                    <Link to="/case-study/detail">
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-sm shadow-blue-100     hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
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
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-sm shadow-blue-100     hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
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
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-sm shadow-blue-100     hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
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
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-sm shadow-blue-100     hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
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
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-sm shadow-blue-100     hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
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
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-sm shadow-blue-100     hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
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
    )
}
