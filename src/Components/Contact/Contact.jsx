import React from 'react';
import './contact.scss';

const LINKS = [
    { url: "https://github.com/mjohnson324/", altText: "github", classText: "fa-github" },
    { url: "https://www.linkedin.com/in/mwjohnson324", altText: "linkedin", classText: "fa-linkedin-in" },
    { url: "https://www.twitter.com/mwjohnson324", altText: "twitter", classText: "fa-twitter" },
    { url: "https://www.meetup.com/sctcio", altText: "meetup", classText: "fa-meetup" }
];

const Contact = function() {
    return(
        <footer id="contact" className="dark-primary-color">
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
                <i className="far fa-envelope fa-2x secondary-text-color"></i>
            </a>
        </footer>
    );
}

const ContactLink = function(url, altText, classText) {
    return(
        <a href={url}
           className="button"
           rel="noopener noreferrer"
           target="_blank"
           alt={altText}>
           <i className={`fab ${classText} fa-2x secondary-text-color`}></i>
        </a>
    );
};

export default Contact;