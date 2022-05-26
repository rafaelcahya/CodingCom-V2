import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Toggle from '../../darkmode/ThemeToggle'

export const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {setIsOpened(wasOpened => !wasOpened)}
    return (
        <>
            <div className='poppins bg-white text-[#495057] dark:text-white dark:bg-[#09080c] duration-200 fixed left-0 right-0 z-10 flex justify-between items-center gap-5 px-5 md:px-16 shadow-[0_35px_100px_10px_#00000019] tracking-wide'>
                <div className='flex justify-start items-center gap-5'>
                    <Link to="/">Logo</Link>
                    <div className='flex gap-10'>
                        <p className='py-7' onClick={toggle}>Tutorial</p>
                        {
                            isOpened && (
                                <div className='modal p-5 md:p-10 overflow-hidden duration-200'>
                                    <div className='modal-content flex flex-col gap-5 p-5 bg-white rounded-md shadow-[0_35px_100px_10px_rgba(0, 0, 0, 0.3)] tracking-wide  '>
                                        <div className='flex justify-between items-center poppins-600 text-[20px] border-b pb-3'>
                                            <Link to="/tutorial" className='hover:underline'><p className=''>All tutorial</p></Link>
                                            <span className="bg-slate-100 hover:bg-slate-200 p-3 rounded-full cursor-pointer" onClick={toggle}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </span>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-20 overflow-y-scroll overflow-x-hidden h-screen'>
                                            {
                                                Array.from({length: 8}).map((_, i) => (
                                                    <div className='flex flex-col gap-4 w-[300px]'>
                                                        <div className='border-b pb-3'>
                                                            <p className='poppins-600'>Internet</p>
                                                            <p className='poppins text-[#7D7D7D] text-[13px]'>Basic and advance internet</p>
                                                        </div>
                                                        <div className='flex flex-col gap-4 text-[14px]'>
                                                            <p className='hover:text-[#AB59FF] cursor-pointer'>Basic Internet</p>
                                                            <p className='hover:text-[#AB59FF] cursor-pointer'>Internet Security</p>
                                                            <p className='hover:text-[#AB59FF] cursor-pointer'>Security Awareness</p>
                                                            <p className='hover:text-[#AB59FF] cursor-pointer'>Internet of Things Business Impact</p>
                                                            <p className='hover:text-[#AB59FF] cursor-pointer'>Internet and Web Development Fundamental</p>
                                                        </div>
                                                        <div className='flex items-center gap-1 hover:underline cursor-pointer'>
                                                            <p className='poppins text-[14px] text-[#AB59FF]'>View all Internet</p>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#AB59FF]"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div> 
                                </div>
                            )
                        }
                        <Link to="/case-study" className='hidden md:block py-7'><p>Case Study</p></Link>
                        <Link to="/class" className='hidden md:block py-7'><p>Class</p></Link>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className='group hover:block'>
                        <p className='py-7'>Hello, William Kosasie</p>
                        <div className='hidden group-hover:flex flex-col gap-5 absolute bg-white shadow-[0_35px_100px_10px_#00000019] right-5 md:right-16 p-5 rounded-md'>
                            <div className='flex items-center justify-between gap-10 bg-white p-3 rounded-md shadow-[0_35px_100px_10px_#00000019]'>
                                <div className='flex flex-col gap-1 poppins-600'>
                                    <p className='text-[14px]'>William Kosasie</p>
                                    <p className='text-[11px] text-[#FF9900]'>Premium user</p>
                                </div>
                                <div className='bg-gray-200 w-10 h-10 rounded-full'></div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='poppins text-[14px]'>Theme</p>
                                <Toggle />
                            </div>
                            <div className='flex items-center justify-center gap-1 hover:bg-[#ff5b581a] p-2 rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-[#FF5C58]"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                <p className='poppins text-[14px] text-[#FF5C58]'>Sign out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
