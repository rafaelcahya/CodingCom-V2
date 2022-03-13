import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../../component/major/Navbar'

export default function TopicPage() {
    return (
        <>
            <Navbar/>
            <div className='black flex flex-col gap-20 my-10 letter-spacing-1'>
                <p className='poppins-600 text-31 bg-gradient-purple-to-pink text-white text-center px-16 py-32'>global system of interconnected computer networks</p>
                <div className='poppins black flex flex-col items-center text-center gap-5 px-10'>
                    <p className='poppins-600 purple text-31'>Basic Internet</p>
                    <p className='gray text-16 w-full lg:w-3/4 line-height-1'>The Internet is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20'>
                    {
                        Array.from({length: 5}).map((_, i) => (
                            <Link to="/category/learning" className='flex flex-col gap-5 p-7 rounded-2xl box-shadow'>
                                <p className='purple poppins-600'>Internet of Things</p>
                                <p className='poppins text-16 gray line-height-1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                {/* <div className='profiles'>
                                    <div className='profiles-group w-10'><img src={profile_image} alt=""/></div>
                                    <div className='profiles-group w-10'><img src={profile_image} alt=""/></div>
                                    <div className='profiles-group w-10'><img src={profile_image} alt=""/></div>
                                    <div className='profiles-group w-10'><img src={profile_image} alt=""/></div>
                                </div> */}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
