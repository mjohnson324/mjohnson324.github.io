import React from 'react';
import { Python, Ruby, RubyOnRails, JavaScript, ReactSVG,
         Redux, SQL, HTMLSVG, CSS, Git } from './SkillSVGs';
import './skills.scss';

const Skills = function() {
    return(
        <section id="skills">
            <h2>Skills</h2>
            <div id="skills-wrapper">
                <Python />
                <Ruby />
                <RubyOnRails />
                <JavaScript />
                <ReactSVG />
                <Redux />
                <SQL />
                <HTMLSVG />
                <CSS />
                <Git />
            </div>
        </section>
    );
};

export default Skills;