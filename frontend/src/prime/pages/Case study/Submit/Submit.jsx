import React from 'react';

import user_icon from '../../../asset/icon/user.svg'
import back_icon from '../../../asset/icon/chevron-left.svg'

export default function Submit() {
    return (
        <>
            <div className='flex flex-col px-5 md:px-20 lg:px-72 py-12 black'>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center justify-end gap-2'>
                        <p className='poppins'>William Kosasie</p>
                        <div className='bg-gray-200 p-3 rounded-full'>
                            <img src={user_icon} alt="" width={15}/>
                        </div>
                    </div>
                    <div className='poppins-600 text-18 bg-gradient-purple-to-pink text-white flex items-center gap-5 px-16 py-10 rounded-2xl text-left'>
                        <div className=''>
                            <img src={back_icon} alt="" />
                        </div>
                        <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
                <div className='flex flex-col gap-10 my-20'>
                    <p className='poppins-600 text-25 text-left'>Submit case study</p>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Case Study title</label>
                            <div className='border-gray px-1 py-1 rounded-lg w-full' >
                                <input type="text" placeholder='Exp : Lorem Ipsum is simply dummy text' className='gray2 px-4 py-1 w-full outline-none' />
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Description</label>
                            <div className='border-gray px-1 py-1 rounded-lg w-full' >
                                <textarea name="" id="" cols="30" rows="5" placeholder='Exp : Lorem Ipsum is simply dummy text' className='gray2 px-4 py-1 w-full outline-none' ></textarea>
                            </div>
                        </div>
                        <span className='bg-purple p-3 rounded-xl text-white'>
                            Submit Case Study
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
