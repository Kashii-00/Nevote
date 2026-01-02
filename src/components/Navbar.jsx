import React, { useEffect, useRef } from 'react';
import logoIcon from '../assets/fish-circle-shape_32631.png';

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const scrollY = e.detail.scrollY;
            const navbar = navRef.current;
            if (!navbar) return;

            // Thresholds matched from legacy script.js
            if (scrollY > 100) {
                navbar.classList.add('scrolled');
                navbar.classList.add('floating');
            } else if (scrollY > 20) {
                navbar.classList.add('scrolled');
                navbar.classList.remove('floating');
            } else {
                navbar.classList.remove('scrolled', 'floating');
            }
        };

        window.addEventListener('smoothscroll', handleSmoothScroll);
        return () => window.removeEventListener('smoothscroll', handleSmoothScroll);
    }, []);

    return (
        <nav className="navbar" id="navbar" ref={navRef}>
            <div className="nav-container">
                <a href="#" className="nav-logo">
                    <img src={logoIcon} alt="Nevote Logo" className="logo-icon" />
                    <span>Nevote</span>
                </a>
                <div className="nav-links">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#benefits" className="nav-link">Benefits</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#blog" className="nav-link">Blog</a>
                    <a href="#contact" className="nav-link">Contact Us</a>
                </div>
                <a href="#" className="nav-cta">Try Nevote free</a>
            </div>
        </nav>
    );
};

export default Navbar;
