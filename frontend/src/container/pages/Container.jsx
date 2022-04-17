import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/config.css'
import '../styles/font.css'
import '../styles/style.css'

import Signup from './Sign Up/Signup'
import Signin from './Sign in/Signin'
import ResetPassword from './Reset password/ResetPassword'
import Homepage from './Homepage/Homepage'
import Tutorial from './Tutorial/Tutorial'
import Learning from './Tutorial/learning/Learning'
import LearningDetail from './Tutorial/learning/LearningDetail'
import CaseStudy from './Case study/CaseStudy'
import Challenge from './Case study/Detail/Challenge/Challenge'
import Certificate from './Case study/Detail/Certificate/Certificate'
import { ThemeProvider } from '../darkmode/ThemeContext'
import Background from '../darkmode/Background'
import CertificateSheet from './Case study/Detail/Certificate/CertificateSheet'

export default function Container() {
    AOS.init();
    return (
        <ThemeProvider>
            <Background>
                <Router>
                    <Routes>
                        <Route path="/signin" element={<Signin/>} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/reset-password" element={<ResetPassword/>} />
                        <Route path="/" exact element={<Homepage/>} />
                        <Route path="/tutorial" element={<Tutorial/>} />
                        <Route path="/tutorial/learning" element={<Learning/>} />
                        <Route path="/tutorial/learning/nama-coursenya" element={<LearningDetail/>} />
                        <Route path="/case-study" element={<CaseStudy/>} />
                        <Route path="/case-study/challenge" element={<Challenge/>} />
                        <Route path="/case-study/certificate" element={<Certificate/>} />
                        <Route path="/case-study/certificate/nama-certifcate" element={<CertificateSheet/>} />
                    </Routes>
                </Router>
            </Background>
        </ThemeProvider>
    )
}

