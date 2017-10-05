import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="about">
            About page<br />
            <Link to='about'><button>Test React Router</button></Link>
        </div>
    );
}

export default About;
