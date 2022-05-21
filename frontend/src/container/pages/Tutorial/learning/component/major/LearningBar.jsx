import React, { useState } from 'react'
import styled from 'styled-components';
import search_icon from '../../../../../asset/icon/search.svg';

const SidebarNav = styled.nav`
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
`;

function LearningBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='poppins-600 tracking-wide block lg:hidden sticky lg:relative top-0 z-10 bg-white text-black dark:text-white dark:bg-[#09080c] duration-200'>
                <div className='flex items-center gap-4 px-10 md:px-16 py-5 border-t border-b dark:border-[#23202e] duration-200'>
                    <div className='bg-slate-100 hover:bg-slate-200 p-2 duration-300 rounded-xl cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='feather feather-menu' onClick={showSidebar} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </div>
                    <p>Mastering on Basic Internet</p>
                </div>
            </div>
            <SidebarNav className='fixed top-0 flex lg:hidden flex-col gap-7 py-5 bg-white text-black dark:text-white dark:bg-[#100e17] duration-200 w-[375px] h-screen z-10 border-r' sidebar={sidebar}>
                <div className='flex items-center justify-between poppins text-[14px] px-5 tracking-wide'>
                    <p className='text-[#7D7D7D] dark:text-[#b4b3b3]'>Basic Internet</p>
                    <div className='bg-slate-100 hover:bg-slate-200 p-2 duration-300 rounded-xl cursor-pointer w-fit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='feather feather-x' onClick={showSidebar}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                </div>
                <div className='poppins bg-[#ebebec] flex items-center rounded-md px-3 mx-5'>
                    <span className='pr-3'><img src={search_icon} alt="" width={17} /></span>
                    <input type="test" placeholder='Search' className='bg-[#ebebec] text-black text-[13px] py-3 outline-none tracking-wide w-full'/>
                </div>
                <p className='poppins-600 text-[14px] uppercase text-[#AB59FF] tracking-widest border-b dark:border-[#23202e] duration-200 pb-4 mx-5'>Mastering on basic internet</p>
                <div className='pl-5 overflow-y-scroll h-screen'>
                    <div className='flex flex-col gap-7 poppins'>
                        <ul className='flex flex-col gap-6 my-4 pr-4 text-[#495057] dark:text-[#d2d1d1]'>
                            <li className='group flex flex-col gap-1 text-[14px] border-l-4 border-[#FD5D5D] pl-4 cursor-pointer'>
                                <p className='poppins-600 text-[#AB59FF]'>Discover the WHY behind security awareness</p>
                                <p className='text-[#7D7D7D] dark:text-[#d2d1d1] whitespace-nowrap'>15 min</p>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>Social engineering, what makes it work</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>How to spot the red flags before you get duped</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>Hear password best practices you can actually follow</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>Learn about ransomware</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>Discover safe mobile device usage</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>Why securing your desk or computer is important.</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>How to build up your resilience to attacks</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>Learn the fast and easy process to spot a fake email.</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>How to browse the Internet safely.</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>Spot the differences between a real email and a scam email!</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                            <li className='text-[14px] group transform hover:translate-x-1 duration-200 cursor-pointer'>
                                <div className='flex flex-col gap-1'>
                                    <p className='poppins-600 group-hover:text-[#AB59FF]'>Communicate through email more securely</p>
                                    <p className=' text-[#7D7D7D] dark:text-[#b4b3b3] whitespace-nowrap'>15 min</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </SidebarNav>
        </>
    )
}

export default LearningBar