import React from 'react'

export default function Users() {
    return (
        <>
            <div className='flex flex-col gap-10 letter_spacing_1'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                        <p className='poppins-600 text_20'>Coding Dashboard</p>
                        <p className='poppins text_14 secondary_text'>Hello William Kosasie, Good Morning</p>
                    </div>
                    <p>Time</p>
                </div>
                <div className='bg_white text_14 p-5 rounded-lg box_shadow'>
                    <div className='flex flex-col gap-5'>
                        <p className='poppins-600 text_20'>User management</p>
                        <table>
                            <thead>
                                <tr className='secondary_text poppins border-b'>
                                    <td className='py-3 pl-10'>id</td>
                                    <td>Username</td>
                                    <td>Email</td>
                                    <td>Created at</td>
                                    <td>Updated at</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody className='tertiary_text poppins'>
                                {
                                    Array.from({length: 20}).map((_, i) => (
                                        <tr className='hover:bg-slate-200 duration-300'>
                                            <td className='py-3 pl-10'>1</td>
                                            <td>William Kosasie</td>
                                            <td>williamkosasie@gmail.com</td>
                                            <td>Feb 12, 2022</td>
                                            <td>Feb 12, 2022</td>
                                            <td>No action</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
