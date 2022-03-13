import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../styles/config.css'
import '../styles/font.css'

import { Signup } from './Sign Up/Signup'
import { Signin } from './Sign in/Signin'
import { ResetPassword } from './Reset password/ResetPassword'
import { Homepage } from './Homepage/Homepage'
import { CategoryPage } from './Tutorial/CategoryPage'
import { Learning } from './Tutorial/Learning/Learning'
import TopicPage from './Tutorial/Topic/TopicPage'
import CaseStudyPage from './Case study/CaseStudyPage'
import ChallengePage from './Case study/Detail/Challenge/ChallengePage'
import CertificatePage from './Case study/Detail/Certificate/CertificatePage'
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
                <Route path="/category" element={<CategoryPage/>} />
                <Route path="/category/topic" element={<TopicPage/>} />
                <Route path="/category/learning" element={<Learning/>} />
                <Route path="/case-study" element={<CaseStudyPage/>} />
                <Route path="/case-study/challenge" element={<ChallengePage/>} />
                <Route path="/case-study/certificate" element={<CertificatePage/>} />
                <Route path="/submit" element={<Submit/>} />
                <Route path="/class" element={<Class/>} />
            </Routes>
        </Router>
    )
}
