import React, { useState } from 'react'
import Axios from 'axios'

import HintPassword from '../../component/minor/HintPassword'

export default function Signin(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const Submit = ()=>{
        Axios.post("http://localhost:3001/user/login", { username: username, password: password }).then((response) => {
            if (response.data.In) {
                localStorage.setItem("In", response.data.In)
                localStorage.setItem("code", response.data.code)
                window.location.replace("/")
                
            } else {
                setErrorMessage(response.data.message)
            }
        })
    }

    

    return (
        <>
            <div className='bg-[#F8F8F9] text-black py-24 tracking-wide h-screen'>
                <div className='mx-auto p-14 rounded-xl shadow-2xl w-fit'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='inter-800 text-[25px]'>Sign in</p>
                            <p className='inter text-[#7D7D7D]'>Enter your credential to access your account</p>
                        </div>
                        <form className='inter flex flex-col gap-7'>
                            <div className='flex flex-col gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className='text-[14px] font-medium'>Username or Email</label>
                                <input type="text" placeholder='Input your username or email' className='border border-[#C9C9C9] focus:border-[#AB59FF] text-black w-[350px] px-5 py-2 rounded-md outline-none' onChange={(event)=>{
                                    setUserName(event.target.value)
                                }}/>
                            </div>
                            <div className='flex flex-col items-start gap-3 focus-within:text-[#AB59FF]'>
                                <div className='flex justify-between items-center w-full'>
                                    <label htmlFor="">Password</label>
                                    <p className='text-[13px] inter-600 text-[#AB59FF] hover:underline cursor-pointer'>Forgot password ?</p>
                                </div>
                                <div className='border border-[#C9C9C9] focus-within:border-[#AB59FF] flex items-center justify-between gap-5 w-[350px] px-1 py-1 rounded-md pr-3'>
                                    <input type="password" placeholder='Input your confirm password' className='text-black px-4 py-1 w-full outline-none' onChange={(event)=>{
                                        setPassword(event.target.value)
                                    }}/>
                                    <HintPassword/>
                                </div>
                            </div>
                        </form>
                        <p onClick={Submit} className='bg-[#AB59FF] text-white text-center py-2 rounded-md cursor-pointer'>Sign in</p>
                    </div>
                </div>
            </div>
        </>
    )
}
