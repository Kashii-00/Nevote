import React from 'react';
import projectsImage from '../../assets/Projects image.png';

const Projects = () => {
    return (
        <section className="feature-section" id="projects">
            <div className="section-container">
                <div className="feature-grid reverse-mobile">

                    <div className="feature-mockup scroll-slide-right">
                        <div className="projects-image-container">
                            <img
                                src={projectsImage}
                                alt="Project Management Dashboard"
                                className="projects-dashboard-img"
                                data-parallax="-0.06"
                                data-parallax-min="0"
                                data-parallax-max="120"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="feature-content scroll-slide-left" style={{ '--delay': '0.1s' }}>
                        <span className="feature-tag">PROJECT MANAGEMENT</span>
                        <h2 className="feature-title">Keep every project moving forward</h2>
                        <p className="feature-description">
                            <strong>Plan, assign, and deliver your work</strong> - all in one place. With smart task tracking, deadlines, and real-time progress, you stay organized and clients stay confident.
                        </p>

                        <a href="#" className="btn btn-black">Try Nevote free</a>

                        <div className="projects-features-grid">
                            <div className="project-feature-item">
                                <i className="fa-solid fa-list-check"></i>
                                <span>Tasks</span>
                            </div>
                            <div className="project-feature-item">
                                <i className="fa-regular fa-clock"></i>
                                <span>Time tracking</span>
                            </div>
                            <div className="project-feature-item">
                                <i className="fa-solid fa-bars-progress"></i>
                                <span>Timesheets</span>
                            </div>
                            <div className="project-feature-item">
                                <i className="fa-solid fa-file-invoice"></i>
                                <span>Reports</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
