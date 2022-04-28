import React, { useState } from 'react'
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
        Axios.post("http://localhost:3001/user/register", { fullname: fullname, username: username, email: email, password: password, confirmpassword: confirmpassword}).then((response) => {
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
            <div className='bg_gray py-10 lg:py-24 letter_spacing_1 h-screen'>
                <div className='black bg_white mx-auto p-14 rounded-xl box_shadow w-fit'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='inter-600 text-[25px] black'>Sign up</p>
                            <div className='flex items-center gap-1 inter text_14'>
                                <p className='secondary_text'>Already a member?</p>
                                <p className='blue'>Sign in</p>
                            </div>
                        </div>
                        <form className='inter text_14 grid grid-cols-1 lg:grid-cols-2 gap-7'>
                        <div className='flex flex-col gap-3'>
                                <label htmlFor="">Full Name</label>
                                <input type="text" placeholder='Input your Full Name' className='border_gray w-[350px] gray2 px-5 py-2 rounded-md outline-none' onChange={(event)=>{
                                    setFullname(event.target.value)
                                }}/>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder='Input your username' className='border_gray w-[350px] gray2 px-5 py-2 rounded-md outline-none' onChange={(event)=>{
                                    setUserName(event.target.value)
                                }}/>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Input your email' className='border_gray w-[350px] gray2 px-5 py-2 rounded-md outline-none' onChange={(event)=>{
                                    setEmail(event.target.value)
                                }}/>
                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <label htmlFor="">Password</label>
                                <div className='border_gray flex items-center justify-between gap-5 w-[350px] px-1 py-1 rounded-md pr-3' >
                                    <input type="password" placeholder='Input your password' className='gray2 px-4 py-1 w-full outline-none' onChange={(event)=>{
                                        setPassword(event.target.value)
                                    }}/>
                                    <img src={help_icon} alt="" width={17} />
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <label htmlFor="">Confirm Password</label>
                                <div className='border_gray flex items-center justify-between gap-5 w-[350px] px-1 py-1 rounded-md pr-3' >
                                    <input type="password" placeholder='Input your confirm password' className='gray2 px-4 py-1 w-full outline-none' onChange={(event)=>{
                                        setConfirmpassword(event.target.value)
                                    }}/>
                                    <img src={help_icon} alt="" width={17} />
                                </div>
                            </div>
                        </form>
                        <p className="text-sm color-red-1 text-center my-8 font-medium">{errorMessage}</p>
                        <div className='bg_blue rounded-md'>
                            <p onClick={Submit} className='white text text-center py-2'>Sign up</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

