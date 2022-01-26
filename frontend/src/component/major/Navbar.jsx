import React from 'react'
import { Link } from 'react-router-dom'

import user_icon from '../../asset/icon/user.svg'

export const Navbar = () => {
    return (
        <>
            <div className='poppins black flex flex-col gap-5 px-5 md:px-20 lg:px-32 py-5'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-5 md:gap-10'>
                        <p>Logo</p>
                        <p className='text-16'>William Kosasie</p>
                    </div>
                    <div className='bg-gray-200 p-3 rounded-full'>
                        <img src={user_icon} alt="" width={15}/>
                    </div>
                </div>
                <div className='flex items-start'>
                    <Link to="/tutorial"><p>Tutorial</p></Link>
                    <p>Case Study</p>
                    <p>Class</p>
                </div>
            </div>
        </>
    )
}
