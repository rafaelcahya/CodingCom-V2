import React from 'react'

function LearningContent() {
    return (
        <div className='sticky top-10 flex flex-col gap-7 poppins'>
            <div className='bg-[#F8F8F9] dark:bg-[#111213] flex items-center rounded-md px-3'>
                <span className='pr-3'><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-black dark:stroke-white"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                <input type="test" placeholder='Search' className='bg-[#F8F8F9] dark:bg-[#111213] text-black dark:text-white text-[13px] py-3 outline-none tracking-wide w-full'/>
            </div>
            <div>
                <p className='poppins-600 text-[14px] uppercase text-[#AB59FF] tracking-widest border-b dark:border-[#23202e] duration-200 pb-4'>Mastering on basic internet</p>
                <div className='overflow-y-scroll h-screen'>
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
        </div>
    )
}

export default LearningContent