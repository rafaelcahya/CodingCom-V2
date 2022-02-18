import React, { useState } from 'react';

import profile from '../../../../asset/Images/profile.png'
import close from '../../../../asset/icon/x.svg'
import open from '../../../../asset/icon/fries.svg'

export default function NavbarMaterial() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='block lg:hidden'>
                {
                    !isOpen ? (
                        <div className='fixed top-0 left-0 flex items-center gap-5 bg-white px-10 py-5 shadow-xl shadow-grey-200 w-full'>
                            <img src={open} alt="" className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
                            <p className='poppins text-16'>Internet of things</p>
                        </div>
                    ) : (
                        <img src={close} alt="" className='fixed top-0 left-0 z-10 bg-white mx-10 my-5 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
                    )
                }
                <div className={`fixed top-0 left-0 h-full flex flex-col bg-white gap-10 pt-20 px-10 ${isOpen ? 'translate-x-0':'-translate-x-full'} ease-in-out duration-200`}>
                    <div className='flex items-center gap-5'>
                        <img src={profile} alt="" width={50}/>
                        <div className='flex flex-col gap-1 text-left'>
                            <p className='text-16 poppins-600'>Nadia Catherine</p>
                            <p className='text-13 poppins gray2'>Content Creator at Medium</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 text-left text-16'>
                        <p className='poppins-600 uppercase'>Learning materials</p>
                        <div className='poppins flex flex-col gap-3'>
                            <p className='lightblue bg-lightblue-15 rounded-lg px-4 py-2 w-fit'>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
