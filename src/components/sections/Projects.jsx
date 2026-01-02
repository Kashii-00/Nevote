import React from 'react';

const Projects = () => {
    return (
        <section className="feature-section" id="benefits">
            <div className="section-container">
                <div className="feature-grid">
                    <div className="feature-mockup scroll-slide-left" data-parallax="0.08">
                        <div className="projects-card">
                            <div className="projects-header">
                                <h3>Projects</h3>
                                <div className="search-filter">
                                    <div className="search-input">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.35-4.35" />
                                        </svg>
                                        <span>Find a project...</span>
                                    </div>
                                    <button className="filter-btn">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="4" y1="21" x2="4" y2="14" />
                                            <line x1="4" y1="10" x2="4" y2="3" />
                                            <line x1="12" y1="21" x2="12" y2="12" />
                                            <line x1="12" y1="8" x2="12" y2="3" />
                                            <line x1="20" y1="21" x2="20" y2="16" />
                                            <line x1="20" y1="12" x2="20" y2="3" />
                                        </svg>
                                        Filter
                                    </button>
                                </div>
                            </div>
                            <div className="projects-section-header">
                                <span>▲ Ongoing</span>
                                <span className="count">5</span>
                            </div>
                            <div className="projects-table">
                                <div className="table-header">
                                    <span>Project</span>
                                    <span>Priority</span>
                                    <span>Clients</span>
                                    <span>Assigned</span>
                                </div>
                                <div className="table-row">
                                    <span className="project-name"><span className="indicator yellow"></span>Asana website audit</span>
                                    <span className="priority high">● High</span>
                                    <span className="client-icon red">●</span>
                                    <span className="avatars">
                                        <span className="avatar-sm"></span>
                                        <span className="avatar-sm"></span>
                                        <span className="avatar-sm"></span>
                                    </span>
                                </div>
                                <div className="table-row">
                                    <span className="project-name"><span className="indicator blue"></span>Marketing workshop</span>
                                    <span className="priority medium">● Medium</span>
                                    <span className="client-icon linkedin">in</span>
                                    <span className="avatars">
                                        <span className="avatar-sm"></span>
                                        <span className="avatar-sm"></span>
                                    </span>
                                </div>
                                <div className="table-row">
                                    <span className="project-name"><span className="indicator green"></span>KYC verification app</span>
                                    <span className="priority low">● Low</span>
                                    <span className="client-icon slack">⊞</span>
                                    <span className="avatars">
                                        <span className="avatar-sm"></span>
                                        <span className="avatar-sm"></span>
                                        <span className="avatar-sm"></span>
                                    </span>
                                </div>
                                <div className="table-row">
                                    <span className="project-name"><span className="indicator purple"></span>Summer sales strate...</span>
                                    <span className="priority medium">● Medium</span>
                                    <span className="client-icon dark">⊕</span>
                                    <span className="avatars"><span className="avatar-sm"></span></span>
                                </div>
                                <div className="table-row">
                                    <span className="project-name"><span className="indicator teal"></span>Setup A/B testing for...</span>
                                    <span className="priority high">● High</span>
                                    <span className="client-icon notion">※</span>
                                    <span className="avatars">
                                        <span className="avatar-sm"></span>
                                        <span className="avatar-sm"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="projects-section-header collapsed">
                                <span>▽ In Review</span>
                                <span className="count">8</span>
                            </div>
                        </div>
                    </div>
                    <div className="feature-content scroll-slide-right" style={{ '--delay': '0.1s' }}>
                        <span className="feature-tag">PROJECT MANAGEMENT</span>
                        <h2 className="feature-title">Keep every project moving forward</h2>
                        <p className="feature-description">
                            <strong>Plan, assign, and deliver your work</strong> - all in one place. With smart task
                            tracking, deadlines, and real-time progress, you stay organized and clients stay confident.
                        </p>
                        <a href="#" className="btn btn-primary">Try Dreelio free</a>
                        <div className="feature-tabs">
                            <button className="tab-btn active">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 11l3 3L22 4" />
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                </svg>
                                Tasks
                            </button>
                            <button className="tab-btn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                Time tracking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
