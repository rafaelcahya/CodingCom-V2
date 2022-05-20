import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import help_icon from '../../asset/icon/help-circle.svg'

export default function Signup() {
    const [fullname, setFullname] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    //const [buttonPopup, setButtonPopup] = useState(false)
    //const [revealPass, setRevealPass] = useState(false)

    const Submit = () =>{
        console.log(fullname)
        console.log(username)
        console.log(email)
        console.log(password)
        Axios.post("http://localhost:3001/user/register", { username: username, email: email, password: password, confirmpassword: confirmpassword}).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
            // if (response.data.message) {
            //     setErrorMessage(response.data.message)
            // } else {
            //     setButtonPopup(true)
            // }
        })
    }

    return (
        <>
            <div className='bg-[#F8F8F9] text-black py-10 lg:py-24 tracking-wide h-screen'>
                <div className='mx-auto p-14 rounded-xl shadow-xl w-fit'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='poppins-600 text-[25px]'>Sign up</p>
                            <div className='poppins flex items-center gap-1 text-[13px]'>
                                <p className='text-[#7D7D7D]'>Already a member?</p>
                                <Link to="/signin"><p className='poppins-600 text-[#AB59FF] hover:underline'>Sign in</p></Link>
                            </div>
                        </div>
                        <form className='poppins grid grid-cols-1 lg:grid-cols-2 gap-7'>
                            <div className='flex flex-col gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className='text-[13px] poppins-600'>Username</label>
                                <input type="text" placeholder='Input your username' className='border border-[#C9C9C9] focus:border-[#AB59FF] text-black text-[13px] w-[350px] px-5 py-2.5 rounded-md outline-none tracking-wide' onChange={(event)=>{
                                    setUserName(event.target.value)
                                }}/>
                            </div>
                            <div className='flex flex-col gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className='text-[13px] poppins-600'>Email</label>
                                <input type="text" placeholder='Input your email' className='border border-[#C9C9C9] focus:border-[#AB59FF] text-black text-[13px] w-[350px] px-5 py-2.5 rounded-md outline-none tracking-wide' onChange={(event)=>{
                                    setEmail(event.target.value)
                                }}/>
                            </div>
                            <div className='flex flex-col items-start gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className='text-[13px] poppins-600'>Password</label>
                                <div className='border border-[#C9C9C9] focus-within:border-[#AB59FF] flex items-center justify-between gap-5 w-[350px] px-1 rounded-md pr-3' >
                                    <input type="password" placeholder='Input your password' className='text-black text-[13px] px-4 py-2.5 w-full outline-none tracking-wide' onChange={(event)=>{
                                        setPassword(event.target.value)
                                    }}/>
                                    <img src={help_icon} alt="" width={17} />
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className='text-[13px] poppins-600'>Confirm Password</label>
                                <div className='border border-[#C9C9C9] focus-within:border-[#AB59FF] flex items-center justify-between gap-5 w-[350px] px-1 rounded-md pr-3'>
                                    <input type="password" placeholder='Input your confirm password' className='text-black text-[13px] px-4 py-2.5 w-full outline-none tracking-wide' onChange={(event)=>{
                                        setConfirmpassword(event.target.value)
                                    }}/>
                                    <img src={help_icon} alt="" width={17} />
                                </div>
                            </div>
                        </form>
                        <div className='flex flex-col gap-5'>
                            <p className="poppins-600 text-[13px] text-[#FF5C58] text-center">{errorMessage}</p>
                            <p onClick={Submit} className='poppins text-[13px] bg-[#AB59FF] text-white text-center py-2 rounded-md cursor-pointer'>Sign up</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

