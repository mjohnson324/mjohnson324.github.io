import React from 'react';
import { Python, Ruby, RubyOnRails, JavaScript, ReactSVG,
         Redux, SQL, HTMLSVG, CSS, Git } from './SkillSVGs';
import './skills.scss';

const Skills = function() {
    return(
        <section id="skills" class="light-primary-color">
            <h2 class="secondary-text-color">Skills</h2>
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