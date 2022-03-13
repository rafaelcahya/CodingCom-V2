import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from '../../../../component/major/Navbar'

import image from '../../../../asset/Images/learning.png'
import profile_icon from '../../../../asset/icon/user.svg'

function ChallengePage() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 black letter-spacing-1'>
                <div className='bg-gradient-purple-to-pink flex flex-col items-center gap-5 text-white px-16 py-16'>
                    <p className='poppins-600 text-31'>Challenge</p>
                    <p className='poppins text-center w-full sm:w-3/4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 sm:px-20'>
                    {
                        Array.from({length: 5}).map((_, i) => (
                            <Link to="" className='flex flex-col gap-5 p-5 rounded-xl box-shadow'>
                                <img src={image} alt="" />
                                <div className='flex items-start gap-5'>
                                    <img src={profile_icon} alt="" width={25}/>
                                    <p className='poppins-600 text-20'>Lorem Ipsum is simply dummy text </p>
                                </div>
                                <p className='poppins text-14 line-height-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                <div className='poppins-600 text-14 flex flex-wrap gap-5'>
                                    {
                                        Array.from({length: 3}).map((_, i) => (
                                            <p className='green'>Web</p>
                                        ))
                                    }
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ChallengePage