import React from 'react';
import Devices from './sections/Devices';
import Projects from './sections/Projects';
import Finance from './sections/Finance';
import CTA from './sections/CTA';

const SecondPage = () => {
    return (
        <div className="second-page">
            <Devices />
            <Projects />
            <Finance />
            <CTA />
        </div>
    );
};

export default SecondPage;
