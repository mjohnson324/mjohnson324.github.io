import React from 'react';
import { Python, JavaScript, SQL, Git } from './SkillSVGs';
import './skills.scss';

const Skills = function() {
    return(
        <section id="skills">
            <h2>Skills</h2>
            <div id="skills-wrapper">
                <Python />
                <JavaScript />
                <SQL />
                <Git />
            </div>
        </section>
    );
};

export default Skills;
