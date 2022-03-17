import React from 'react'
import { Link } from 'react-router-dom'

import user_icon from '../../asset/icon/user.svg'

export const Navbar = () => {
    return (
        <>
            <div className='poppins black flex flex-col md:flex-row justify-between items-center gap-5 px-5 md:px-16 lg:px-32 py-7'>
                <div className='flex flex-col md:flex-row items-center gap-5'>
                    <Link to="/">Logo</Link>
                    <div className='flex gap-10 text_14'>
                        <Link to="/tutorial"><p>Tutorial</p></Link>
                        <Link to="/case-study"><p>Case Study</p></Link>
                        <Link to="/class"><p>Class</p></Link>
                    </div>
                </div>
                <div className='bg-gray-200 p-3 rounded-full'>
                    <img src={user_icon} alt="" width={15}/>
                </div>
            </div>
        </>
    )
}
