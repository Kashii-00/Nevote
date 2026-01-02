import React, { useState, useEffect, useRef } from 'react';
import ipadProImage from '../../assets/pfcMvn2yqXD2Cl6VWthMkHlhaKQ.png';

const Devices = () => {
    const [activeView, setActiveView] = useState('mobile'); // 'mobile' or 'web'
    const deviceContainerRef = useRef(null);
    const [scrollScale, setScrollScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!deviceContainerRef.current) return;

            const rect = deviceContainerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how much of the element is visible
            const visibleStart = Math.max(0, windowHeight - rect.top);
            const visibleEnd = rect.height + windowHeight;
            const scrollProgress = Math.max(0, Math.min(1, visibleStart / visibleEnd));

            // Scale from 0.8 to 1.1 based on scroll
            const scale = 0.8 + (scrollProgress * 0.3);
            setScrollScale(scale);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="devices-section" id="features">
            {/* Trusted By - Header of second page */}
            <div className="trusted-header">
                <p className="trusted-text scroll-fade-up">Trusted by 7,000+ top startups, freelancers and studios</p>
                <div className="logo-marquee scroll-fade-up" style={{ '--delay': '0.1s' }}>
                    <div className="logo-track">
                        {/* First set */}
                        <div className="logo-item"><i className="fa-brands fa-apple fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-google fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-stripe fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-spotify fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-ember fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-airbnb fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-meta fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-amazon fa-2xl"></i></div>

                        {/* Second set (duplicate for loop) */}
                        <div className="logo-item"><i className="fa-brands fa-apple fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-google fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-stripe fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-spotify fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-ember fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-airbnb fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-meta fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-amazon fa-2xl"></i></div>

                        {/* Third set (extra buffer) */}
                        <div className="logo-item"><i className="fa-brands fa-apple fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-google fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-stripe fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-spotify fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-ember fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-airbnb fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-meta fa-2xl"></i></div>
                        <div className="logo-item"><i className="fa-brands fa-amazon fa-2xl"></i></div>
                    </div>
                </div>
            </div>

            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag scroll-fade-up" data-parallax="0.05">SEAMLESS ACROSS DEVICES</span>
                    <h2 className="section-title scroll-fade-up" style={{ '--delay': '0.1s' }} data-parallax="0.08">
                        Work from anywhere,<br />stay in sync
                    </h2>
                </div>
                <div className="phone-mockup scroll-fade-up" style={{ '--delay': '0.2s' }} data-parallax="0.1">
                    <div className="phone-image-placeholder" ref={deviceContainerRef}>
                        {/* Device Content - Wrapper for proper button positioning */}
                        <div className="device-image-wrapper">
                            {activeView === 'web' && (
                                <img
                                    src={ipadProImage}
                                    alt="Web App on iPad"
                                    className="device-display-image"
                                    style={{ transform: `scale(${scrollScale})` }}
                                />
                            )}
                            {activeView === 'mobile' && (
                                <div className="mobile-placeholder">
                                    {/* Placeholder for mobile content */}
                                </div>
                            )}

                            {/* Toggle Buttons - Inside wrapper, on the image */}
                            <div className="device-toggle-container">
                                <button
                                    className={`device-toggle-btn ${activeView === 'mobile' ? 'active' : ''}`}
                                    onClick={() => setActiveView('mobile')}
                                >
                                    Mobile App
                                </button>
                                <button
                                    className={`device-toggle-btn ${activeView === 'web' ? 'active' : ''}`}
                                    onClick={() => setActiveView('web')}
                                >
                                    Web App
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Devices;
