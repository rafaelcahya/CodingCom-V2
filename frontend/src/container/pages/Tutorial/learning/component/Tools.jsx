import React from 'react'
import image from '../../../../asset/Images/Standard Collection 0.png'

function Tools() {
    return (
        <>
            <div className='inter grid grid-cols-2 gap-5 text_16'>
                {
                    Array.from({length: 6}).map((_, i) => (
                        <div className='flex items-center gap-5 bg_gray2 rounded-md p-5'>
                            <img src={image} alt="" width="40" />
                            <p>Visual Studio Code</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Tools