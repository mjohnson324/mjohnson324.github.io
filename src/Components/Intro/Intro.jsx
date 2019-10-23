import React from 'react';
import photo from './photo.jpg';
import './intro.scss';


const Intro = function() {
    return(
        <section id="about-me" className="default-primary-color">
            <img id="my-photo" alt="my face" src={photo} />
            <h2>About Me</h2>
            <div className="story-wrapper">
                <p>
                    My goal as a software developer is to create life-saving applications. I see immense potential in digital health and data science to revolutionize healthcare.
                </p>
                <p>
                    I'm a web developer with experiece in React and Redux, HTML/CSS, Ruby on Rails, and Python. I studied biomedical engineering at Penn State.
                </p>
                <p>
                    In my spare time I enjoy salsa dancing, cooking, and rooting for my alma matter alongside my fellow alumni.
                </p>
            </div>
        </section>
    );
}

export default Intro;