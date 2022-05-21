import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import HintPassword from '../../component/minor/HintPassword'

export default function Signin(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const Submit = ()=>{
        if(username === "" && password === ""){
            setErrorMessage("All form must be filled")
        }else if(username === "" || username === null){
            setErrorMessage("Username must be filled")
        }else if(password === ""){
            setErrorMessage("Password must be filled")
        }else{
            Axios.post("http://localhost:3001/user/login", { username: username, password: password }).then((response) => {
                if(response.data.message){
                    setErrorMessage(response.data.message)
                }else{
                    localStorage.setItem("In", response.data.In)
                    localStorage.setItem("code", response.data.code)
                    window.location.replace("/")
                }
            })
        }
    }

    return (
        <>
            <div className='bg-[#F8F8F9] text-black py-24 tracking-wide h-screen'>
                <div className='mx-auto p-14 rounded-xl shadow-xl w-fit'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='poppins-600 text-[25px]'>Sign in</p>
                            <p className='poppins text-[#7D7D7D] text-[13px]'>Enter your credential to access your account</p>
                        </div>
                        <form className='poppins flex flex-col gap-7'>
                            <div className='flex flex-col gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className='text-[13px] poppins-600'>Username or Email</label>
                                <input type="text" placeholder='Input your username or email' className='border border-[#C9C9C9] focus:border-[#AB59FF] text-black w-[350px] text-[13px] px-5 py-2.5 rounded-md outline-none tracking-wide' onChange={(event)=>{
                                    setUserName(event.target.value)
                                }}/>
                            </div>
                            <div className='flex flex-col items-start gap-3 focus-within:text-[#AB59FF]'>
                                <div className='flex justify-between items-center w-full'>
                                    <label htmlFor="" className='text-[13px] poppins-600'>Password</label>
                                    <Link to="/forgot-password" className='text-[13px] poppins text-[#AB59FF] hover:underline cursor-pointer'>Forgot password ?</Link>
                                </div>
                                <div className='border border-[#C9C9C9] focus-within:border-[#AB59FF] flex items-center justify-between gap-5 w-[350px] px-1 rounded-md pr-3'>
                                    <input type="password" placeholder='Input your confirm password' className='text-black text-[13px] px-4 py-2.5 w-full outline-none tracking-wide' onChange={(event)=>{
                                        setPassword(event.target.value)
                                    }}/>
                                    {/* <HintPassword/> */}
                                </div>
                            </div>
                        </form>
                        <div className='flex flex-col gap-5'>
                            <p className="poppins-600 text-[13px] text-[#FF5C58] text-center">{errorMessage}</p>
                            <p onClick={Submit} className='poppins text-[13px] bg-[#AB59FF] text-white text-center py-2.5 rounded-md cursor-pointer'>Sign in</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
