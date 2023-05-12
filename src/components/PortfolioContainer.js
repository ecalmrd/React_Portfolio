import React, { useState } from 'react'
import NavBar from './NavBar';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}