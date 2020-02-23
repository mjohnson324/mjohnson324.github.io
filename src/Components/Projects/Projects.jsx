import React from 'react';
import './projects.scss';
import blockhead from './project-photos/blockhead.png';
import mockdoc from './project-photos/mockdoc.png';
import rdcover from './project-photos/rdcover.png';
import restCountries from './project-photos/rest-countries.png';

const PROJECTS = [
    {
        title: "MockDoc",
        image: mockdoc,
        altText: "MockDoc website",
        description: "A single-page web application for booking appointments with doctors.",
        repo: "https://github.com/mjohnson324/MockDoc",
        number: 1
    },
    {
      title: "Blockhead",
      url: "https://www.michael-w-johnson.com/blockhead/",
      image: blockhead,
      altText: "Blockhead puzzle game",
      description: "A navigation puzzle game playable on mobile and desktop.",
      repo: "https://github.com/mjohnson324/blockhead",
      number: 2
    },
    {
      title: "RDCover",
      image: rdcover,
      altText: "Ruby Data Cover ORM library",
      description: "A simple Object Relational Mapping library for interfacing with SQL databases.",
      repo: "https://github.com/mjohnson324/RDCover",
      number: 3
    },
    {
      title: "Rest Countries",
      url: "https://www.michael-w-johnson.com/rest-countries/",
      image: restCountries,
      altText: "REST Country data react app",
      description: "A simple interface for viewing data on countries provided by REST Countries.",
      repo: "https://github.com/mjohnson324/rest-countries",
      number: 4
    }
];

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = { "visibleProject": 1 };

        this.isHidden = this.isHidden.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
    }

    isHidden(number, type) {
        const { visibleProject } = this.state;
        if (number !== visibleProject) {
            if (type === "button") {
                return "hidden-border";
            } else {
                return "hidden";
            }
        } else if (type === "project") {
            return "project-grid";
        }
        return "";
    }

    toggleHidden(number) {
        const { visibleProject } = this.state;
        if (number !== visibleProject) {
            return(() => this.setState({ "visibleProject": number }));
        }
    }

    render() {
        return(
            <section id="projects">
                <h2>Projects</h2>
                <span id="project-tabs">
                    {PROJECTS.map(({ number }) => {
                        return(
                            <ProjectButton
                                key={number}
                                number={number}
                                hiddenBorder={this.isHidden(number, "button")}
                                toggle={this.toggleHidden(number)} />
                        );
                    })}
                </span>
                <ul>
                    {PROJECTS.map(data => {
                        return(
                            <Project
                                key={data.number}
                                data={data}
                                hidden={this.isHidden(data.number, "project")} />
                        );
                    })}
                </ul>
            </section>
        );
    }
}

const Project = function({ data, hidden }) {
    const { title, url, image, altText, description, repo } = data;
    return(
        <li className={`project ${hidden}`}>
            <h3 className="project-title">{title}</h3>
            <img src={image} className="screenshot" alt={altText} />
            <p className="project-descriptions">{description}</p>
            <span className="project-links">
                <LiveButton url={url} />
                <a href={repo} className="button" target="_blank" rel="noopener noreferrer">Repo</a>
            </span>
        </li>
    );
};

const LiveButton = function({ url }) {
    if (url !== undefined) {
        return(
            <a href={url} className="button" target="_blank" rel="noopener noreferrer">Live</a>
        );
    }
    return null;
}

const ProjectButton = function({ number, hiddenBorder, toggle }) {
    return(
        <button onClick={toggle} className={`tab ${hiddenBorder}`}>{number}</button>
    );
};

export default Projects;
