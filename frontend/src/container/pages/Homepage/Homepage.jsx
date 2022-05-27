import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../component/major/Navbar'

function Homepage() {

    if(localStorage.getItem("In") != null && localStorage.getItem("code")!=null){
        window.onbeforeunload = function() {
            localStorage.clear();
            return '';
        };
    }

    return (
        <>
            <Navbar/>
            <div className='bg-[#F8F8F9] text-black dark:text-white dark:bg-[#09080c] duration-200 flex flex-col gap-20 py-20'>
                <div className='flex flex-col items-start md:items-center md:text-center gap-5 py-20 px-5 md:px-16 lg:px-32 w-full tracking-wide'>
                    <p className='poppins-700 text-[16px] uppercase text-[#AB59FF]'>Coding.com</p>
                    <p className='poppins-700 text-[61px]'>Frontend Development</p>
                    <p className='text-[20px] text-[#7D7D7D] dark:text-[#b4b3b3] w-full md:w-[750px]'>Platform for web development material from design to web hosting. Gain insights and knowledge, explore trends and understand best practices.</p>
                </div>
                <div className='flex flex-col items-center gap-10 py-20 tracking-wide'>
                    <p className='poppins-600 text-[25px]'>Choose you journey</p>
                    <div className='flex flex-wrap justify-center gap-10 poppins-600 text-[16px] text-center'>
                        <div className='w-[250px] h-[85px] py-7 hover:bg-[#AB59FF] hover:text-white rounded-md shadow-[0_35px_100px_10px_#00000019] hover:shadow-[0_35px_100px_10px_#ac59ff4c] transform hover:-translate-y-2 bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] dark:hover:bg-[#AB59FF] duration-200 cursor-pointer'>
                            <p>Internet</p>
                        </div>
                        <div className='w-[250px] h-[85px] py-7 hover:bg-[#AB59FF] hover:text-white rounded-md shadow-[0_35px_100px_10px_#00000019] hover:shadow-[0_35px_100px_10px_#ac59ff4c] transform hover:-translate-y-2 bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] dark:hover:bg-[#AB59FF] duration-200 cursor-pointer'>
                            <p>UI Design</p>
                        </div>
                        <div className='w-[250px] h-[85px] py-7 hover:bg-[#AB59FF] hover:text-white rounded-md shadow-[0_35px_100px_10px_#00000019] hover:shadow-[0_35px_100px_10px_#ac59ff4c] transform hover:-translate-y-2 bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] dark:hover:bg-[#AB59FF] duration-200 cursor-pointer'>
                            <p>UX Design</p>
                        </div>
                        <div className='w-[250px] h-[85px] py-7 hover:bg-[#AB59FF] hover:text-white rounded-md shadow-[0_35px_100px_10px_#00000019] hover:shadow-[0_35px_100px_10px_#ac59ff4c] transform hover:-translate-y-2 bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] dark:hover:bg-[#AB59FF] duration-200 cursor-pointer'>
                            <p>Frontend Development</p>
                        </div>
                        <div className='w-[250px] h-[85px] py-7 hover:bg-[#AB59FF] hover:text-white rounded-md shadow-[0_35px_100px_10px_#00000019] hover:shadow-[0_35px_100px_10px_#ac59ff4c] transform hover:-translate-y-2 bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] dark:hover:bg-[#AB59FF] duration-200 cursor-pointer'>
                            <p>Backend Development</p>
                        </div>
                        <div className='w-[250px] h-[85px] py-7 hover:bg-[#AB59FF] hover:text-white rounded-md shadow-[0_35px_100px_10px_#00000019] hover:shadow-[0_35px_100px_10px_#ac59ff4c] transform hover:-translate-y-2 bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] dark:hover:bg-[#AB59FF] duration-200 cursor-pointer'>
                            <p>Database</p>
                        </div>
                        <div className='w-[250px] h-[85px] py-7 hover:bg-[#AB59FF] hover:text-white rounded-md shadow-[0_35px_100px_10px_#00000019] hover:shadow-[0_35px_100px_10px_#ac59ff4c] transform hover:-translate-y-2 bg-[#F8F8F9] text-black dark:text-white dark:bg-[#111213] dark:hover:bg-[#AB59FF] duration-200 cursor-pointer'>
                            <p>Web Hosting</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Homepage