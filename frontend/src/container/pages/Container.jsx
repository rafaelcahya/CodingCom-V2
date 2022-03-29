import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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

export default function Container() {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<Signin/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/reset-password" element={<ResetPassword/>} />
                <Route path="/" exact element={<Homepage/>} />
                <Route path="/tutorial" element={<Tutorial/>} />
                <Route path="/tutorial/learning" element={<Learning/>} />
                <Route path="/tutorial/learning/nama-coursenya" element={<LearningDetail/>} />
            </Routes>
        </Router>
    )
}

