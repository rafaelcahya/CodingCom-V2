import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavbarLearning() {
    const [isOpenTutorial, setIsOpenTutorial] = useState(false);
    const [isOpenLearningContent, setIsOpenLearningContent] = useState(false);

    function toggleTutorial() {setIsOpenTutorial(wasOpenedTutorial => !wasOpenedTutorial)}
    function toggleLearningContent() {setIsOpenLearningContent(wasOpenedLearningContent => !wasOpenedLearningContent)}
    return (
        <>
            <div className='poppins bg-white text-[#495057] dark:text-white dark:bg-[#09080c] duration-200 fixed left-0 right-0 z-10 flex justify-between items-center gap-5 px-5 md:px-16 shadow-[0_35px_100px_10px_#00000019] tracking-wide'>
                <div className='flex items-center gap-5'>
                    <Link to="/">Logo</Link>
                    <p className='py-7 text-[14px]' onClick={toggleTutorial}>Tutorial</p>
                    {
                        isOpenTutorial && (
                            <div className='modal p-5 md:p-10 overflow-hidden duration-200'>
                                <div className='modal-content flex flex-col gap-5 p-5 bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] rounded-md shadow-[0_35px_100px_10px_rgba(0, 0, 0, 0.3)] tracking-wide duration-200'>
                                    <div className='flex justify-between items-center poppins-600 text-[20px] border-b dark:border-[#23202e] pb-3'>
                                        <Link to="/tutorial" className='hover:underline'><p className=''>All tutorial</p></Link>
                                        <span className="bg-slate-100 hover:bg-slate-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 p-3 rounded-full cursor-pointer" onClick={toggleTutorial}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </span>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 pb-20 overflow-y-scroll overflow-x-hidden h-screen'>
                                        {
                                            Array.from({length: 8}).map((_, i) => (
                                                <div className='flex flex-col gap-4 w-[300px]'>
                                                    <div className='border-b dark:border-[#23202e] pb-3'>
                                                        <p className='poppins-600'>Internet</p>
                                                        <p className='poppins text-[#7D7D7D] dark:text-[#b4b3b3] text-[13px]'>Basic and advance internet</p>
                                                    </div>
                                                    <div className='flex flex-col gap-4 text-[14px]'>
                                                        <p className='hover:text-[#AB59FF] cursor-pointer'>Basic Internet</p>
                                                        <p className='hover:text-[#AB59FF] cursor-pointer'>Internet Security</p>
                                                        <p className='hover:text-[#AB59FF] cursor-pointer'>Security Awareness</p>
                                                        <p className='hover:text-[#AB59FF] cursor-pointer'>Internet of Things Business Impact</p>
                                                        <p className='hover:text-[#AB59FF] cursor-pointer'>Internet and Web Development Fundamental</p>
                                                    </div>
                                                    <div className='flex items-center gap-1 hover:underline decoration-[#AB59FF] cursor-pointer'>
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
                </div>
                    <p className='py-7 text-[14px]' onClick={toggleLearningContent}>Learning content</p>
                    {
                        isOpenLearningContent && (
                            <div className='modal-learning p-5 md:p-10 overflow-hidden duration-200'>
                                <div className='modal-learning-content flex flex-col gap-5 p-5 bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] rounded-md shadow-[0_35px_100px_10px_rgba(0, 0, 0, 0.3)] tracking-wide duration-200'>
                                    <div className='flex justify-between items-center poppins-600 text-[20px] border-b dark:border-[#23202e] pb-3'>
                                        <p className=''>Learning Content</p>
                                        <span className="bg-slate-100 hover:bg-slate-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 p-3 rounded-full cursor-pointer" onClick={toggleLearningContent}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </span>
                                    </div>
                                    <div className='flex flex-col gap-6 pb-20 overflow-y-scroll overflow-x-hidden h-screen'>
                                        {
                                            Array.from({length: 15}).map((_, i) => (
                                                <div>
                                                    <p className='poppins-600'>Internet</p>
                                                    <p className='poppins text-[#7D7D7D] dark:text-[#b4b3b3] text-[13px]'>Basic and advance internet</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div> 
                            </div>
                        )
                    }
            </div>
        </>
    )
}
