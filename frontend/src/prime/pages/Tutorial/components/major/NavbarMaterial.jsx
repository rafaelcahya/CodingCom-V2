import React, { useState } from 'react';

import close from '../../../../asset/icon/x.svg'
import open from '../../../../asset/icon/fries.svg'

export default function NavbarMaterial() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='block lg:hidden'>
                {
                    !isOpen ? (
                        <div className='fixed top-0 left-0 flex items-center gap-5 bg-white px-10 py-5 shadow-xl shadow-grey-200 w-full z-10'>
                            <img src={open} alt="" className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
                            <p className='poppins text-16'>Internet of things</p>
                        </div>
                    ) : (
                        <img src={close} alt="" className='fixed top-0 left-0 z-20 bg-white mx-10 my-5 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
                    )
                }
                <div className={`fixed top-0 left-0 h-full bg-white pt-20 px-10 ${isOpen ? 'translate-x-0':'-translate-x-full'} ease-in-out duration-200 z-10`}>
                    <div className='flex flex-col gap-10'>
                        <p className='purple text-20 poppins-600'>Internet of things</p>
                        <div className='flex flex-col gap-7'>
                            {
                                Array.from({length: 5}).map((_, i) => (
                                    <div className='poppins flex items-center justify-center gap-7'>
                                        <p className='purple text-20 p-2'>{i++}</p>
                                        <div className='flex flex-col gap-1'>
                                            <p className='black'>Internet of things</p>
                                            <p className='gray text-12'>100 min</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
