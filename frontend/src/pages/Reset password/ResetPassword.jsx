import React from 'react'
import {Link} from 'react-router-dom'

import help_icon from '../../asset/icon/help-circle.svg'

export const ResetPassword = () => {
    return (
        <>
            <div className='black flex flex-col items-center gap-10 pt-10 pb-20'>
                <p className='poppins-600 text-25 letterspacing-1 capitalize'>reset password</p>
                <form className='poppins text-16 letterspacing-1 flex flex-col gap-5 sm:gap-10'>
                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-10'>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Input your email' className='border-gray width-20 gray2 px-5 py-2 rounded-lg outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Old password</label>
                            <input type="text" placeholder='Input your old password' className='border-gray2 width-20 gray px-5 py-2 rounded-lg outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-10'>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">New password</label>
                            <div className='border-gray flex items-center justify-between gap-5 width-20 px-1 py-1 rounded-lg pr-3' >
                                <input type="password" placeholder='Input your new password' className='gray px-4 py-1 w-full outline-none' />
                                <img src={help_icon} alt="" width={17} />
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">New Confirm Password</label>
                            <div className='border-gray flex items-center justify-between gap-5 width-20 px-1 py-1 rounded-lg pr-3' >
                                <input type="password" placeholder='Input your new confirm password' className='gray px-4 py-1 w-full outline-none' />
                                <img src={help_icon} alt="" width={17}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-5'>
                        <p className='bg-purple text-white rounded-lg py-3 cursor-pointer w-full capitalize'>reset password</p>
                        <Link to='/signin'>
                            <p className='hover:underline'>Back to sign in</p>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}
