import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../styles/config.css'
import '../styles/font.css'

import Signup from './Sign Up/Signup'
import Signin from './Sign in/Signin'
import ResetPassword from './Reset password/ResetPassword'
import Tutorial from './Tutorial/Tutorial'

export default function Container() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Tutorial/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/reset-password" element={<ResetPassword/>} />
            </Routes>
        </Router>
    )
}

