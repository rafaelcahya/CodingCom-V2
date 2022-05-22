import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function Signin(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [passwordShown, setPasswordShown] = useState(false);

    const Submit = ()=>{
        if(username === "" && password === ""){
            setErrorMessage("All form must be filled")
        }else if(username === "" || username === null){
            setErrorMessage("Username or Email must be filled")
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

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

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
                            <div className='flex flex-col gap-3 focus-within:text-[#AB59FF] '>
                                <label htmlFor="" className={
                                    `text-[13px] poppins-600 
                                    ${errorMessage === 'All form must be filled' || errorMessage === 'Username or Email must be filled' || errorMessage === 'Wrong Password or Username/Email' ? 
                                    'text-[#FF5C58]' : 
                                    ''
                                }`}>Username or Email</label>
                                <input type="text" placeholder='Input your username or email' className={
                                    `border border-[#C9C9C9] focus:border-[#AB59FF] text-black w-[350px] text-[13px] px-5 py-2.5 rounded-md outline-none tracking-wide 
                                    ${errorMessage === 'All form must be filled' || errorMessage === 'Username or Email must be filled' || errorMessage === 'Wrong Password or Username/Email' ? 
                                    'border-[#FF5C58]' : 
                                    ''
                                }`} onChange={(event)=>{setUserName(event.target.value)}}/>
                            </div>
                            <div className='flex flex-col items-start gap-3 focus-within:text-[#AB59FF]'>
                                <div className='flex justify-between items-center w-full'>
                                    <label htmlFor="" className={
                                        `text-[13px] poppins-600 
                                        ${errorMessage === 'All form must be filled' || errorMessage === 'Password must be filled' || errorMessage === 'Wrong Password or Username/Email' ? 
                                        'text-[#FF5C58]' : 
                                        ''
                                    }`}>Password</label>
                                    <Link to="/forgot-password" className='text-[13px] poppins text-[#AB59FF] hover:underline cursor-pointer'>Forgot password ?</Link>
                                </div>
                                <div className={`
                                    bg-white border focus-within:border-[#AB59FF] flex items-center justify-between gap-5 w-[350px] px-1 rounded-md pr-3 
                                    ${errorMessage === 'All form must be filled' || errorMessage === 'Password must be filled' || errorMessage === 'Wrong Password or Username/Email' ? 
                                    'border-[#FF5C58]' : 
                                    'border-[#C9C9C9]'
                                }`}>
                                    <input 
                                        type={passwordShown ? "text" : "password"}
                                        placeholder='Input your confirm password' 
                                        className='text-black text-[13px] px-4 py-2.5 w-full outline-none tracking-wide' 
                                        onChange={(event)=>{setPassword(event.target.value)}}/>
                                        {
                                            passwordShown ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye stroke-[#666]" onClick={togglePassword}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off stroke-[#666]" onClick={togglePassword}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                        }
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
