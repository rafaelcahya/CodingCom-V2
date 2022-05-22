import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function Signup() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [passwordShown, setPasswordShown] = useState(false);
    const [confPasswordShown, setConfPasswordShown] = useState(false);

    const Submit = () =>{
        Axios.post("http://localhost:3001/user/register", { username: username, email: email, password: password, confirmpassword: confirmpassword}).then((response) => {
            setErrorMessage(response.data.message)
            // if (response.data.message) {
            //     setErrorMessage(response.data.message)
            // } else {
            //     setButtonPopup(true)
            // }
        })
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const toggleConfPassword = () => {
        setConfPasswordShown(!confPasswordShown);
    };

    return (
        <>
            <div className='bg-[#F8F8F9] text-black py-10 tracking-wide h-screen'>
                <div className='mx-auto p-14 rounded-xl shadow-xl w-fit'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='poppins-600 text-[25px]'>Sign up</p>
                            <div className='poppins flex items-center gap-1 text-[13px]'>
                                <p className='text-[#7D7D7D]'>Already a member?</p>
                                <Link to="/signin"><p className='poppins-600 text-[#AB59FF] hover:underline'>Sign in</p></Link>
                            </div>
                        </div>
                        <form className='poppins flex flex-col gap-7'>
                            <div className='flex flex-col gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className={
                                    `text-[13px] poppins-600 
                                    ${
                                        errorMessage === 'All form must be filled' || 
                                        errorMessage === 'Username must be filled' || 
                                        errorMessage === 'Username must be less than 20 characters' || 
                                        errorMessage === 'Username must be more than 3 characters' || 
                                        errorMessage === 'Username cannot contain spaces'? 
                                    'text-[#FF5C58]' : 
                                    ''
                                }`}>Username</label>
                                <input type="text" placeholder='Input your username' 
                                    className={
                                        `border border-[#C9C9C9] focus:border-[#AB59FF] text-black w-[350px] text-[13px] px-5 py-2.5 rounded-md outline-none tracking-wide 
                                        ${
                                            errorMessage === 'All form must be filled' || 
                                            errorMessage === 'Username must be filled' || 
                                            errorMessage === 'Username must be less than 20 characters' || 
                                            errorMessage === 'Username must be more than 3 characters' || 
                                            errorMessage === 'Username cannot contain spaces' ? 
                                        'border-[#FF5C58]' : 
                                        ''
                                    }`} onChange={(event)=>{setUserName(event.target.value)}}
                                />
                            </div>
                            <div className='flex flex-col gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className={
                                    `text-[13px] poppins-600 
                                    ${
                                        errorMessage === 'All form must be filled' || 
                                        errorMessage === 'Email must be filled' || 
                                        errorMessage === 'Email is invalid' ? 
                                    'text-[#FF5C58]' : 
                                    ''
                                }`}>Email</label>
                                <input type="text" placeholder='Input your email' 
                                    className={
                                        `border border-[#C9C9C9] focus:border-[#AB59FF] text-black w-[350px] text-[13px] px-5 py-2.5 rounded-md outline-none tracking-wide 
                                        ${
                                            errorMessage === 'All form must be filled' || 
                                            errorMessage === 'Email must be filled' || 
                                            errorMessage === 'Email is invalid' ?
                                        'border-[#FF5C58]' : 
                                        ''
                                    }`} onChange={(event)=>{setEmail(event.target.value)}}/>
                            </div>
                            <div className='flex flex-col items-start gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className={
                                    `text-[13px] poppins-600 
                                    ${
                                        errorMessage === 'All form must be filled' || 
                                        errorMessage === 'Password must be filled' || 
                                        errorMessage === 'Password must be at least 8 characters' || 
                                        errorMessage === 'Password must be less than 20 characters' || 
                                        errorMessage === 'Password must contain at least 1 uppercase letter' || 
                                        errorMessage === 'Password must contain at least 1 lowercase letter' || 
                                        errorMessage === 'Password must contain at least 1 number' ? 
                                    'text-[#FF5C58]' : 
                                    ''
                                }`}>Password</label>
                                <div className={`
                                    bg-white border focus-within:border-[#AB59FF] flex items-center justify-between gap-5 w-[350px] px-1 rounded-md pr-3 
                                    ${
                                        errorMessage === 'All form must be filled' || 
                                        errorMessage === 'Password must be filled' || 
                                        errorMessage === 'Password must be at least 8 characters' || 
                                        errorMessage === 'Password must be less than 20 characters' || 
                                        errorMessage === 'Password must contain at least 1 uppercase letter' || 
                                        errorMessage === 'Password must contain at least 1 lowercase letter' || 
                                        errorMessage === 'Password must contain at least 1 number' ?  
                                    'border-[#FF5C58]' : 
                                    'border-[#C9C9C9]'
                                }`}>
                                    <input type={passwordShown ? "text" : "password"} placeholder='Input your password' className='text-black text-[13px] px-4 py-2.5 w-full outline-none tracking-wide'
                                    onChange={(event)=>{setPassword(event.target.value)}}/>
                                    {
                                        passwordShown ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye stroke-[#666]" onClick={togglePassword}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off stroke-[#666]" onClick={togglePassword}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-3 focus-within:text-[#AB59FF]'>
                                <label htmlFor="" className={
                                    `text-[13px] poppins-600 
                                    ${
                                        errorMessage === 'All form must be filled' || 
                                        errorMessage === 'Confirm password must be filled' || 
                                        errorMessage === 'Confirm password must be same as password'  ? 
                                    'text-[#FF5C58]' : 
                                    ''
                                }`}>Confirm Password</label>
                                <div className={`
                                    bg-white border focus-within:border-[#AB59FF] flex items-center justify-between gap-5 w-[350px] px-1 rounded-md pr-3 
                                    ${
                                        errorMessage === 'All form must be filled' || 
                                        errorMessage === 'Confirm password must be filled' || 
                                        errorMessage === 'Confirm password must be same as password' ?  
                                    'border-[#FF5C58]' : 
                                    'border-[#C9C9C9]'
                                }`}>
                                    <input type={confPasswordShown ? "text" : "password"} placeholder='Input your confirm password' className='text-black text-[13px] px-4 py-2.5 w-full outline-none tracking-wide' onChange={(event)=>{
                                        setConfPasswordShown(event.target.value)
                                    }}/>
                                    {
                                        confPasswordShown ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye stroke-[#666]" onClick={toggleConfPassword}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off stroke-[#666]" onClick={toggleConfPassword}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                    }
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

