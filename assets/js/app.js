import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MembersList from './Components/MembersList';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usersList" element={<MembersList />} />
            </Routes>
        </Router>
    </React.StrictMode>
);