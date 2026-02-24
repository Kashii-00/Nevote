import React from 'react';
import financeImg from '../../assets/financeobject.jpg';

const Finance = () => {
    return (
        <section className="feature-section" id="finance">
            <div className="section-container">
                <div className="feature-grid">
                    <div className="feature-content scroll-slide-left">
                        <span className="feature-tag">FINANCIAL MANAGEMENT</span>
                        <h2 className="feature-title">Track income, get paid, stress less</h2>
                        <p className="feature-description">
                            <strong>Create branded invoices</strong>, log expenses, and keep tabs on your earnings.
                            Whether you bill hourly or per project, everything's automated and tax-friendly.
                        </p>
                        <a href="#" className="btn btn-primary">Try Dreelio free</a>
                        <div className="projects-features-grid">
                            <div className="project-feature-item">
                                <i className="fa-regular fa-file"></i>
                                <span>Invoicing</span>
                            </div>
                            <div className="project-feature-item">
                                <i className="fa-solid fa-plus-circle"></i>
                                <span>Budgets</span>
                            </div>
                            <div className="project-feature-item">
                                <i className="fa-solid fa-chart-line"></i>
                                <span>Forecasting</span>
                            </div>
                            <div className="project-feature-item">
                                <i className="fa-regular fa-window-restore"></i>
                                <span>Integrations</span>
                            </div>
                        </div>
                    </div>
                    <div className="feature-mockup scroll-slide-right" style={{ '--delay': '0.1s' }}>
                        <div className="finance-image-wrapper">
                            <img
                                src={financeImg}
                                alt="Finance Analytics"
                                className="finance-img"
                                data-parallax="-0.06"
                                data-parallax-min="0"
                                data-parallax-max="120"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Finance;
