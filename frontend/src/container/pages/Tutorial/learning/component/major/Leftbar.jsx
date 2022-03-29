import React from 'react'

export default function Leftbar() {
    return (
        <div className='sticky top-10 flex flex-col gap-5 inter-600 rounded-md'>
            <p>Run and test your code here</p>
            <p className='red underline hover:text-black'>Text editor</p>
        </div>
    )
}
