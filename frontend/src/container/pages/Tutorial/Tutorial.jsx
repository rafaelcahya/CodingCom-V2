import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../component/major/Navbar'

import image from '../../asset/Images/Standard Collection 0.png'

function Tutorial() {
    return (
        <>
            <Navbar/>
            <div className='letter_spacing_1'>
                <div className='bg_gray2 inter-700 text-[48px] md:text-[71px] py-16 px-5 md:px-16 lg:px-32'>
                    <span className='underline-animation'>Popular category</span>
                </div>
                <div className='flex flex-col gap-10 px-5 md:px-16 lg:px-32 py-20'>
                    <div className='flex flex-col gap-3'>
                        <p className='inter-600 text_25'>All categories</p>
                        <p className='inter secondary_text text_14'>Many categories for you to learn web development.</p>
                    </div>
                    <div className='inter flex flex-wrap justify-center sm:justify-start gap-5 md:gap-5 text_16'>
                        {
                            Array.from({length: 6}).map((_, i) => (
                                <Link to="/tutorial/learning" className='flex items-center gap-7 px-7 py-5 rounded-md bg-white w-fit hover:scale-105 duration-150'>
                                    <img src={image} alt="" width={40} />
                                    <div className='flex flex-col gap-3'>
                                        <p className='inter-800 red text_11 uppercase'>internet</p>
                                        <p>Basic internet</p>
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