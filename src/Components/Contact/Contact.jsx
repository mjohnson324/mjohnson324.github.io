import React from 'react';
import './contact.scss';

const LINKS = [
    { url: "https://github.com/mjohnson324/", altText: "github", classText: "fa-github" },
    { url: "https://www.linkedin.com/in/mwjohnson324", altText: "linkedin", classText: "fa-linkedin-in" },
];

const Contact = function() {
    return(
        <footer id="contact">
            {LINKS.map(arg => {
            return(<ContactLink
                key={arg.altText}
                url={arg.url}
                altText={arg.altText}
                classText={arg.classText}/>
            );
            })}
            <a
                href="mailto:mjohnson324@gmail.com"
                className="button"
                alt="email">
                <i className="far fa-envelope fa-2x"></i>
            </a>
        </footer>
    );
}

const ContactLink = function({ url, altText, classText }) {
    return(
        <a href={url}
           className="button"
           rel="noopener noreferrer"
           target="_blank"
           alt={altText}>
           <i className={`fab ${classText} fa-2x`}></i>
        </a>
    );
};

export default Contact;
