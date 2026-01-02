import React from 'react';

const Finance = () => {
    return (
        <section className="feature-section alt-bg">
            <div className="section-container">
                <div className="feature-grid reverse">
                    <div className="feature-content scroll-slide-left">
                        <span className="feature-tag">FINANCIAL MANAGEMENT</span>
                        <h2 className="feature-title">Track income, get paid, stress less</h2>
                        <p className="feature-description">
                            <strong>Create branded invoices</strong>, log expenses, and keep tabs on your earnings.
                            Whether you bill hourly or per project, everything's automated and tax-friendly.
                        </p>
                        <a href="#" className="btn btn-primary">Try Dreelio free</a>
                        <div className="feature-tabs two-col">
                            <button className="tab-btn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                </svg>
                                Invoicing
                            </button>
                            <button className="tab-btn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="16" />
                                    <line x1="8" y1="12" x2="16" y2="12" />
                                </svg>
                                Budgets
                            </button>
                            <button className="tab-btn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                                Forecasting
                            </button>
                            <button className="tab-btn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                                Integrations
                            </button>
                        </div>
                    </div>
                    <div className="feature-mockup scroll-slide-right" style={{ '--delay': '0.1s' }} data-parallax="-0.08">
                        <div className="budget-card">
                            <h3>Project budget</h3>
                            <div className="budget-stats">
                                <div className="budget-stat">
                                    <div className="budget-icon blue">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                            <line x1="1" y1="10" x2="23" y2="10" />
                                        </svg>
                                    </div>
                                    <div className="budget-info">
                                        <span className="budget-value">$18,090</span>
                                        <span className="budget-label">Billable total</span>
                                    </div>
                                </div>
                                <div className="budget-stat">
                                    <div className="budget-icon green">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="1" x2="12" y2="23" />
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </div>
                                    <div className="budget-info">
                                        <span className="budget-value">$22,090</span>
                                        <span className="budget-label">Expected profit</span>
                                    </div>
                                </div>
                                <div className="budget-stat">
                                    <div className="budget-icon orange">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="12" y1="8" x2="12" y2="16" />
                                            <line x1="8" y1="12" x2="16" y2="12" />
                                        </svg>
                                    </div>
                                    <div className="budget-info">
                                        <span className="budget-value">$2,325</span>
                                        <span className="budget-label">Project costs</span>
                                    </div>
                                </div>
                                <div className="budget-stat">
                                    <div className="budget-icon purple">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div className="budget-info">
                                        <span className="budget-value">89.3</span>
                                        <span className="budget-label">Margin</span>
                                    </div>
                                </div>
                            </div>
                            <div className="analytics-section">
                                <h4>Analytics</h4>
                                <div className="analytics-legend">
                                    <span><span className="line green"></span> Budget used</span>
                                    <span><span className="line dashed"></span> Forecast</span>
                                </div>
                                <div className="analytics-chart">
                                    <svg viewBox="0 0 300 100" className="chart-svg">
                                        <polyline fill="none" stroke="#22c55e" strokeWidth="2"
                                            points="0,80 50,75 100,60 150,55 200,40 250,35 300,30" />
                                        <polyline fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5"
                                            points="200,40 220,38 250,32 280,28 300,25" />
                                    </svg>
                                    <div className="chart-labels">
                                        <span>Jan</span>
                                        <span>Feb</span>
                                        <span>Mar</span>
                                        <span>Apr</span>
                                        <span>May</span>
                                        <span>Jun</span>
                                        <span>Jul</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Finance;
