import React from 'react'
import { Navbar } from '../../component/major/Navbar'

export default function Class() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 px-5 md:px-20 lg:px-32 black'>
                <div className='poppins-600 text-25 bg-gradient-purple-to-pink text-white flex items-center gap-5 px-16 py-16 mt-16 rounded-2xl text-left'>
                    <p>Class</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='poppins-600 gray2 text-18 text-left'>Category</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-10 w-full'>
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-xl shadow-slate-200 hover:shadow-md hover:shadow-slate-200 transition-shadow cursor-pointer w-full'>
                            <p className='black poppins-600'>Internet</p>
                            <p className='gray2 poppins'>20 classes</p>
                        </div>
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-xl shadow-slate-200 hover:shadow-md hover:shadow-slate-200 transition-shadow cursor-pointer w-full'>
                            <p className='black poppins-600'>Internet</p>
                            <p className='gray2 poppins'>20 classes</p>
                        </div>
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-xl shadow-slate-200 hover:shadow-md hover:shadow-slate-200 transition-shadow cursor-pointer w-full'>
                            <p className='black poppins-600'>Internet</p>
                            <p className='gray2 poppins'>20 classes</p>
                        </div>
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-2xl shadow-xl shadow-slate-200 hover:shadow-md hover:shadow-slate-200 transition-shadow cursor-pointer w-full'>
                            <p className='black poppins-600'>Internet</p>
                            <p className='gray2 poppins'>20 classes</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        
        </>
    )
}
