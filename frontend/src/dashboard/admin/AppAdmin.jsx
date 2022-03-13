import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexAdmin from './pages/IndexAdmin'

export default function AppAdmin() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/admin" exact element={<IndexAdmin/>} />
                </Routes>
            </Router>
        </>
    )
}
