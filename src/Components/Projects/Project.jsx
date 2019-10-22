import React from 'react';

class Project extends React.Component {
    contructor(props) {
        super(props);
    }
}

export default Project;

// const mockdoc = document.getElementById("mockdoc-tab");
// const blockhead = document.getElementById("blockhead-tab");
// const rdcover = document.getElementById("rdcover-tab");
// const restCountries = document.getElementById("restCountries-tab");
// const tabButtons = [mockdoc, blockhead, rdcover, restCountries];
// tabButtons.forEach(button => {
//   button.addEventListener("click", cycleProjects);
// });

// function cycleProjects(e) {
//   e.preventDefault();
//   const currentID = e.target.id;
//   tabButtons.forEach(button => {
//     let classes = button.classList;
//     let projectID = button.id.split("-")[0];
//     let project = document.getElementById(projectID);
//     if (button.id === currentID && classes.contains("hidden-border")) {
//       button.classList.remove("hidden-border");
//       project.classList.remove("hidden");
//       if (window.innerWidth >= 630) {
//         project.classList.add("project-grid");
//       }
//       project.classList.add("project-grid");
//     } else if (button.id !== currentID && classes.contains("hidden-border") === false) {
//       button.classList.add("hidden-border");
//       project.classList.add("hidden");
//       if (project.classList.contains("project-grid")) {
//         project.classList.remove("project-grid");
//       }
//     }
//   });
// }