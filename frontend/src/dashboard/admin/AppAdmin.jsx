import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider} from 'react-helmet-async';

import Sidebar from './component/major/Sidebar'
import Users from './pages/Users'

import './style/sidebarConfig.scss'

export default function AppAdmin() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <style>{'body { background-color: #EFF1F6; }'}</style>
                </Helmet>
                <div className='flex h-screen overflow-hidden'>
                    <Sidebar/>
                    <div className='flex flex-1 flex-col gap-10 p-10 w-full overflow-y-scroll'>
                        <Router>
                            <Routes>
                                <Route path="/admin" exact element={<Users/>} />
                            </Routes>
                        </Router>
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}
