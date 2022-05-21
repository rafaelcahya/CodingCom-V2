import React from 'react'
import { Link } from 'react-router-dom'

import arrow_left from '../../asset/icon/arrow-left.svg'

export default function ResetPassword(){
    return (
        <>
            <div className='bg-[#F8F8F9] text-black py-24 tracking-wide h-screen'>
                <div className='mx-auto p-14 rounded-xl shadow-xl w-fit'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='poppins-600 text-[25px]'>Forgot password</p>
                            <p className='poppins text-[#7D7D7D] text-[13px]'>No worries. We‘ll send you reset instructions.</p>
                        </div>
                        <form className='poppins'>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="" className='text-[13px] poppins-600'>Email</label>
                                <input type="text" placeholder='Input your email' className='border border-[#C9C9C9] focus:border-[#AB59FF] text-black w-[350px] text-[13px] px-5 py-2.5 rounded-md outline-none tracking-wide'/>
                            </div>
                        </form>
                        <Link to="/signin" className='flex flex-col gap-5'>
                            <p className="poppins-600 text-[13px] text-[#FF5C58] text-center">errorMessage</p>
                            <p className='poppins text-[13px] bg-[#AB59FF] text-white text-center py-2 rounded-md cursor-pointer'>Forgot password</p>
                            <p className='poppins text-[#7D7D7D] text-[13px] text-center hover:underline'>Back to sign in</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
