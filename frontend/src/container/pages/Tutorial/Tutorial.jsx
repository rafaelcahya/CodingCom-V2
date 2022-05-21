import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../component/major/Navbar'

function Tutorial() {
    return (
        <>
            <Navbar/>
            <div className='bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] duration-200'>
                <div className='poppins-600 text-[48px] md:text-[71px] py-16 px-5 md:px-16 tracking-wide'>
                    <span className='underline-animation'>Popular category</span>
                </div>
            </div>
            <div className='bg-white text-black dark:text-white dark:bg-[#09080c] duration-200 tracking-wide'>
                <div className='flex flex-col gap-10 px-5 md:px-16 py-20'>
                    <div className='flex flex-col gap-3'>
                        <p className='poppins-600 text-[25px]'>All categories</p>
                        <p className='poppins text-[#7D7D7D] dark:text-[#b4b3b3] text_14'>Many categories for you to learn web development.</p>
                    </div>
                    <div className='flex flex-wrap gap-10 md:gap-10 tracking-wide'>
                        {
                            Array.from({length: 5}).map((_, i) => (
                                <Link to="/tutorial/learning" className='bg_image_dummy_tutorial group relative rounded-md bg-white w-[200px] md:w-[215px] h-[250px] md:h-[290px] bg-cover shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]' data-aos="fade-up">
                                    <div className='absolute bottom-4 right-4 flex flex-col gap-2 text-right group-hover:-translate-y-4 duration-200'>
                                        <p className='poppins-800 text-[#AB59FF] text-[11px] uppercase'>internet</p>
                                        <p className='poppins-600 text-white text-[20px]'>Basic internet</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tutorial