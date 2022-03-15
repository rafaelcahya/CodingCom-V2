import React from 'react'
import { Link } from 'react-router-dom'

import user_icon from '../../asset/icon/user.svg'

export const Navbar = () => {
    return (
        <>
            <div className='poppins black flex justify-between items-center px-5 md:px-16 py-5'>
                <div className='flex gap-10'>
                    <p>Logo</p>
                    <div className='flex gap-10'>
                        <Link to="/"><p>Tutorial</p></Link>
                        <Link to="/case-study"><p>Case Study</p></Link>
                        <Link to="/class"><p>Class</p></Link>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <p>William Kosasie</p>
                    <div className='bg-gray-200 p-3 rounded-full'>
                        <img src={user_icon} alt="" width={15}/>
                    </div>
                </div>
            </div>
        </>
    )
}
