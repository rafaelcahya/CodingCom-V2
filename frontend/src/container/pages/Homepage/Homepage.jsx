import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../component/major/Navbar'

import image from '../../asset/Images/Standard Collection 0.png'

function Homepage() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 letter_spacing_1'>
                <div className='header flex flex-col gap-3 inter-600 py-10 px-5 md:px-16 lg:px-32 w-full'>
                    <p className='text-[20px]'>Hi Guest</p>
                    <p className='text-[25px]'>Explore the new world of web development</p>
                </div>
                <div className='flex flex-col gap-10 px-5 md:px-16 lg:px-32'>
                    <div className='flex flex-col gap-3'>
                        <p className='inter-600 text-[20px]'>Popular category</p>
                        <p className='inter secondary_text text_14'>Many categories for you to learn web development. choose what you want</p>
                    </div>
                    <div className='inter flex flex-wrap justify-center sm:justify-start gap-5 text-[16px]'>
                        {
                            Array.from({length: 6}).map((_, i) => (
                                <Link to="" className='flex items-center gap-7 px-7 py-5 rounded-lg box_shadow w-fit'>
                                    <img src={image} alt="" width={40} />
                                    <p>Basic internet</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage