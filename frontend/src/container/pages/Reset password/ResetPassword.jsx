import React from 'react'

import help_icon from '../../asset/icon/help-circle.svg'

export default function ResetPassword(){
    return (
        <>
            <div className='bg_gray py-10 lg:py-24 letter_spacing_1 h-screen'>
                <div className='black bg_white mx-auto p-14 rounded-xl box_shadow w-fit'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='inter-600 text-[25px] black'>Reset password</p>
                            {/* <div className='flex items-center gap-1 inter text_14'>
                                <p className='secondary_text'>Already a member?</p>
                                <p className='blue'>Sign in</p>
                            </div> */}
                        </div>
                        <form className='inter text_14 grid grid-cols-1 lg:grid-cols-2 gap-7'>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Input your email' className='border_gray w-[350px] gray2 px-5 py-2 rounded-md outline-none' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="">Old password</label>
                                <input type="text" placeholder='Input your old password' className='border_gray w-[350px] gray2 px-5 py-2 rounded-md outline-none' />
                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <label htmlFor="">New password</label>
                                <div className='border_gray flex items-center justify-between gap-5 w-[350px] px-1 py-1 rounded-md pr-3' >
                                    <input type="password" placeholder='Input your new password' className='gray2 px-4 py-1 w-full outline-none' />
                                    <img src={help_icon} alt="" width={17} />
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <label htmlFor="">New confirm password</label>
                                <div className='border_gray flex items-center justify-between gap-5 w-[350px] px-1 py-1 rounded-md pr-3' >
                                    <input type="password" placeholder='Input your new confirm password' className='gray2 px-4 py-1 w-full outline-none' />
                                    <img src={help_icon} alt="" width={17} />
                                </div>
                            </div>
                        </form>
                        <div className='bg_blue rounded-md'>
                            <p className='white text text-center py-2'>Reset password</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
