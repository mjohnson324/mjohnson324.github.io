import React from 'react';
import photo from './photo.jpg';
import './intro.scss';


const Intro = function() {
    return(
        <section id="about-me">
            <img id="my-photo" alt="my face" src={photo} />
            <h2>About Me</h2>
            <div className="story-wrapper">
                <p>
                    My journey in technology started at Penn State where I studied biomedical engineering, and I continue to pursue that passion in software. My goal is to improve lives through technology. I see immense potential in digital health and data science to revolutionize healthcare.
                </p>
                <p>
                    I'm a data analyst with experience coding applications with Python and JavaScript.
                </p>
            </div>
        </section>
    );
}

export default Intro;
