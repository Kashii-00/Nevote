import React, { useState, useEffect, useRef } from 'react';
import ipadProImage from '../../assets/pfcMvn2yqXD2Cl6VWthMkHlhaKQ.png';
import mobileViewImage from '../../assets/mobileview.png';

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

            // Scale from 1.25 (clearly zoomed in) to 1.0 (normal)
            const maxZoom = 1.25;
            const scale = maxZoom - (scrollProgress * (maxZoom - 1));
            setScrollScale(scale);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('smoothscroll', handleScroll); // Custom smooth scroll event
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('smoothscroll', handleScroll);
        };
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
                    <div className="scroll-fade-up">
                        <span className="section-tag">SEAMLESS ACROSS DEVICES</span>
                    </div>
                    <div className="scroll-fade-up" style={{ '--delay': '0.1s' }}>
                        <h2 className="section-title">
                            Work from anywhere,<br />stay in sync
                        </h2>
                    </div>
                </div>
                <div className="phone-mockup scroll-fade-up" style={{ '--delay': '0.2s' }}>
                    <div className="phone-image-placeholder" ref={deviceContainerRef}>
                        {/* Device Content - Wrapper for proper button positioning */}
                        <div className="device-image-wrapper">
                            {/* Track handles Scaling + Sliding for both images together */}
                            <div
                                className={`device-track view-${activeView}`}
                                style={{ '--scale': scrollScale }}
                            >
                                <img
                                    src={mobileViewImage}
                                    alt="Mobile App View"
                                    className="device-display-image mobile-img"
                                />
                                <img
                                    src={ipadProImage}
                                    alt="Web App on iPad"
                                    className="device-display-image web-img"
                                />
                            </div>

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
