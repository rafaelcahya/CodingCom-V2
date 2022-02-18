import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../styles/config.css'
import '../styles/font.css'

import { Signup } from './Sign Up/Signup'
import { Signin } from './Sign in/Signin'
import { ResetPassword } from './Reset password/ResetPassword'
import { Homepage } from './Homepage/Homepage'
import { Tutorial } from './Tutorial/Tutorial'
import { Learning } from './Tutorial/Learning/Learning'
import CaseStudy from './Case study/CaseStudy'
import CaseStudyDetail from './Case study/CaseStudyDetail'
import Submit from './Case study/Submit/Submit'
import Class from './Class/Class'

export const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Homepage/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/reset-password" element={<ResetPassword/>} />
                <Route path="/tutorial" element={<Tutorial/>} />
                <Route path="/tutorial/learning" element={<Learning/>} />
                <Route path="/case-study" element={<CaseStudy/>} />
                <Route path="/case-study/detail" element={<CaseStudyDetail/>} />
                <Route path="/submit" element={<Submit/>} />
                <Route path="/class" element={<Class/>} />
            </Routes>
        </Router>
    )
}
