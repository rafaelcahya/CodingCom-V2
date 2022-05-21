import React from 'react'

export default function Leftbar() {
    return (
        <div className='sticky top-10 flex flex-col gap-5 poppins text-[14px] bg-[#F8F8F9] text-[#495057] dark:text-[#d2d1d1] dark:bg-[#09080c] duration-200 p-5 rounded-md tracking-wide'>
            <div className='flex flex-col gap-2'>
                <p className='poppins-700'>Live Text Editor</p>
                <p>See and use Live Text Editor to help your learning easier</p>
            </div>
            <p className='poppins bg-[#AB59FF] text-white text-center py-3 rounded-md'>Live Text Editor</p>
        </div>
    )
}
