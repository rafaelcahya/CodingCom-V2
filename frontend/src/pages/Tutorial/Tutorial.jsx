import React from 'react'

import { Navbar } from '../../component/major/Navbar'
import { Footer } from '../../component/major/Footer'
import { Link } from 'react-router-dom'

export const Tutorial = () => {
    return (
        <>
            <Navbar/>
            <div className='px-5 md:px-20 lg:px-32'>
                <p className='poppins-600 text-25 bg-gradient-purple-to-pink text-white px-16 py-16 mt-16 rounded-2xl text-left'>Tutorial</p>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-16'>
                    <Link to='/tutorial/category'>
                        <div className='text-left rounded-2xl shadow-sm shadow-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
                            <p className='poppins-600 text-18 bg-blue-50 text-blue-500 p-5 rounded-t-2xl letterspacing-1'>Internet</p>
                            <p className='lato gray2 leading-7 letterspacing-1 p-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Link>
                    <Link to='/tutorial/category'>
                        <div className='text-left rounded-2xl shadow-sm shadow-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
                            <p className='poppins-600 text-18 bg-blue-50 text-blue-500 p-5 rounded-t-2xl letterspacing-1'>Internet</p>
                            <p className='lato gray2 leading-7 letterspacing-1 p-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Link>
                    <Link to='/tutorial/category'>
                        <div className='text-left rounded-2xl shadow-sm shadow-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
                            <p className='poppins-600 text-18 bg-blue-50 text-blue-500 p-5 rounded-t-2xl letterspacing-1'>Internet</p>
                            <p className='lato gray2 leading-7 letterspacing-1 p-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Link>
                    <Link to='/tutorial/category'>
                        <div className='text-left rounded-2xl shadow-sm shadow-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
                            <p className='poppins-600 text-18 bg-blue-50 text-blue-500 p-5 rounded-t-2xl letterspacing-1'>Internet</p>
                            <p className='lato gray2 leading-7 letterspacing-1 p-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Link>
                    <Link to='/tutorial/category'>
                        <div className='text-left rounded-2xl shadow-sm shadow-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
                            <p className='poppins-600 text-18 bg-blue-50 text-blue-500 p-5 rounded-t-2xl letterspacing-1'>Internet</p>
                            <p className='lato gray2 leading-7 letterspacing-1 p-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Link>
                    <Link to='/tutorial/category'>
                        <div className='text-left rounded-2xl shadow-sm shadow-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-shadow cursor-pointer'>
                            <p className='poppins-600 text-18 bg-blue-50 text-blue-500 p-5 rounded-t-2xl letterspacing-1'>Internet</p>
                            <p className='lato gray2 leading-7 letterspacing-1 p-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}