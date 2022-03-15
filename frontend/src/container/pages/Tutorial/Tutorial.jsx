import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../component/major/Navbar'

import image from '../../asset/Images/Standard Collection 0.png'

function Tutorial() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col items-center gap-20 letter_spacing_1'>
                <div className='poppins-600 bg_blue text-white text-center text_25 py-20 w-full'>
                    <p>Explore the new world of web development</p>
                </div>
                <div className='flex flex-col items-center text-center gap-5'>
                    <p className='poppins-600 blue text_25'>Popular category</p>
                    <p className='poppins secondary_text'>Many categories for you to learn web development. choose what you want</p>
                </div>
                <div className='poppins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-5 sm:gap-14 text_16'>
                    {
                        Array.from({length: 6}).map((_, i) => (
                            <Link to="" className='flex items-center gap-5 bg-white px-10 py-7 rounded-xl box-shadow w-fit box_shadow_2'>
                                <img src={image} alt="" width={40} />
                                <p>Basic internet</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Tutorial