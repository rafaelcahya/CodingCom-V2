import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider} from 'react-helmet-async';

import Users from './pages/Users'

import './style/sidebarConfig.scss'

export default function AppAdmin() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <style>{'body { background-color: #EFF1F6; }'}</style>
                </Helmet>
                <Router>
                    <Routes>
                        <Route path="/admin" exact element={<Users/>} />
                    </Routes>
                </Router>
            </HelmetProvider>
        </>
    )
}
