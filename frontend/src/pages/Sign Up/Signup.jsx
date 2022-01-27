import React from 'react'

import help_icon from '../../asset/icon/help-circle.svg'
import google_icon from '../../asset/icon/google.png'
import github_icon from '../../asset/icon/github.png'

export const Signup = () => {
    return (
        <>
            <div className='black flex flex-col items-center gap-10 pt-10 pb-20'>
                <div className='poppins-600 text-25 letterspacing-1 flex flex-col gap-2'>
                    <p>Welcome</p>
                    <p>Sign Up to Project Coding</p>
                </div>
                <form className='poppins text-15 letterspacing-1 flex flex-col gap-5 sm:gap-10'>
                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-10'>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder='Input your username' className='border-gray width-20 gray2 px-5 py-2 rounded-lg outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Input your email' className='border-gray width-20 gray2 px-5 py-2 rounded-lg outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-10'>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Password</label>
                            <div className='border-gray flex items-center justify-between gap-5 width-20 px-1 py-1 rounded-lg pr-3' >
                                <input type="password" placeholder='Input your password' className='gray2 px-4 py-1 w-full outline-none' />
                                <img src={help_icon} alt="" width={17} />
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Confirm Password</label>
                            <div className='border-gray flex items-center justify-between gap-5 width-20 px-1 py-1 rounded-lg pr-3' >
                                <input type="password" placeholder='Input your confirm password' className='gray2 px-4 py-1 w-full outline-none' />
                                <img src={help_icon} alt="" width={17}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-5'>
                        <p className='bg-purple text-white rounded-lg py-3 cursor-pointer w-full'>Sign Up</p>
                        <div className='flex flex-col gap-10'>
                            <p>Or Sign Up with</p>
                            <div className='flex items-center gap-10'>
                                <img src={google_icon} alt="" width={36}/>
                                <img src={github_icon} alt="" width={36}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
