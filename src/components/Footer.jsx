import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                            </svg>
                            <span>Dreelio</span>
                        </a>
                        <p className="footer-tagline">Run your freelance business like a pro.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Integrations</a>
                            <a href="#">API</a>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="footer-column">
                            <h4>Resources</h4>
                            <a href="#">Documentation</a>
                            <a href="#">Help Center</a>
                            <a href="#">Community</a>
                            <a href="#">Status</a>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Security</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Dreelio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
