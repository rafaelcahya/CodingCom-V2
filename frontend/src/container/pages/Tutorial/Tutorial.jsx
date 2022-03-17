import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../component/major/Navbar'

import image from '../../asset/Images/Standard Collection 0.png'

function Tutorial() {
    return (
        <>
            <Navbar/>
            <div className='flex flex-col gap-20 letter_spacing_1'>
                <div className='header flex flex-col gap-3 poppins-600 py-12 px-5 md:px-16 lg:px-32 w-full'>
                    <p className='text_25'>Popular category</p>
                </div>
                <div className='flex flex-col gap-10 px-5 md:px-16 lg:px-32'>
                    <div className='flex flex-col gap-3'>
                        <p className='poppins-600 text_20'>All categories</p>
                        <p className='poppins secondary_text text_14'>Many categories for you to learn web development.</p>
                    </div>
                    <div className='poppins flex flex-wrap justify-center sm:justify-start gap-5 md:gap-10 text_16'>
                        {
                            Array.from({length: 6}).map((_, i) => (
                                <Link to="/tutorial/learning" className='flex items-center gap-5 bg-white px-10 py-7 rounded-xl box-shadow w-fit box_shadow_2'>
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

export default Tutorial