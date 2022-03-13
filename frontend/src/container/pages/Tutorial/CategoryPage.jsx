import React from 'react'

import { Navbar } from '../../component/major/Navbar'
import { Footer } from '../../component/major/Footer'
import { Link } from 'react-router-dom'

import logo from '../../asset/Images/Standard Collection 0.png'

export default function CategoryPage(){
    return (
        <>
            <Navbar/>
            <div className='black flex flex-col gap-20 my-10 letter-spacing-1'>
                <p className='poppins-600 text-31 bg-gradient-purple-to-pink text-white text-center px-16 py-32'>Explore the new world of web development</p>
                <div className='poppins black flex flex-col items-center text-center gap-5 px-10'>
                    <p className='poppins-600 purple text-31'>Popular category</p>
                    <p className='text-16 line-height-1'>Many categories for you to learn web development. choose what you want</p>
                </div>
                <div className='poppins text-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-10 lg:px-20 xl:px-52 justify-center'>
                    <Link to='/category/topic' className='flex flex-col items-center gap-5 box-shadow p-5 text-center rounded-2xl'>
                        <img src={logo} alt="" width={40}/>
                        <p>Basic internet</p>
                    </Link>
                    <Link to='/category/topic' className='flex flex-col items-center gap-5 box-shadow p-5 text-center rounded-2xl'>
                        <img src={logo} alt="" width={40}/>
                        <p>UI design</p>
                    </Link>
                    <Link to='/category/topic' className='flex flex-col items-center gap-5 box-shadow p-5 text-center rounded-2xl'>
                        <img src={logo} alt="" width={40}/>
                        <p>UX design</p>
                    </Link>
                    <Link to='/category/topic' className='flex flex-col items-center gap-5 box-shadow p-5 text-center rounded-2xl'>
                        <img src={logo} alt="" width={40}/>
                        <p>Frontend Development</p>
                    </Link>
                    <Link to='/category/topic' className='flex flex-col items-center gap-5 box-shadow p-5 text-center rounded-2xl'>
                        <img src={logo} alt="" width={40}/>
                        <p>Backend development</p>
                    </Link>
                    <Link to='/category/topic' className='flex flex-col items-center gap-5 box-shadow p-5 text-center rounded-2xl'>
                        <img src={logo} alt="" width={40}/>
                        <p>Database system</p>
                    </Link>
                    <Link to='/category/topic' className='flex flex-col items-center gap-5 box-shadow p-5 text-center rounded-2xl'>
                        <img src={logo} alt="" width={40}/>
                        <p>DevOps</p>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}