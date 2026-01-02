import React from 'react';
import dashboardMockup from '../assets/dashboard-mockup2.jpg';


const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-background">
                <div className="cloud cloud-1" data-parallax-bg="0.1"></div>
                <div className="cloud cloud-2" data-parallax-bg="0.15"></div>
                <div className="cloud cloud-3" data-parallax-bg="0.2"></div>
            </div>

            <div className="hero-content" data-parallax="0.1">
                <h1 className="hero-title scroll-fade-up">
                    Run your freelance<br />business like a pro
                </h1>
                <p className="hero-description scroll-fade-up" style={{ '--delay': '0.1s' }}>
                    All-in-one platform for managing clients, projects, and payments without<br />
                    the chaos. From first contract to final invoice, we've got your back.
                </p>
                <div className="hero-buttons scroll-fade-up" style={{ '--delay': '0.2s' }}>
                    <a href="#" className="btn btn-primary">Try Nevote free</a>
                    <a href="#features" className="btn btn-secondary">See features</a>
                </div>
            </div>

            {/* Dashboard Mockup Container */}
            <div className="hero-mockup-container">
                <div className="hero-mockup scroll-fade-up" style={{ '--delay': '0.3s' }}>
                    <img
                        src={dashboardMockup}
                        alt="Dreelio Dashboard Interface"
                        className="dashboard-mockup-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
