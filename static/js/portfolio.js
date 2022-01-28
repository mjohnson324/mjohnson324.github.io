const projectCycler = document.getElementById("projects-cycle");
projectCycler.addEventListener("click", cycleProject);
projectCycler["projectNumber"] = 0;

function cycleProject() {
  const projects = document.getElementsByClassName("project");
  const numProjects = projects.length
  projectCycler["projectNumber"] = (projectCycler["projectNumber"] + 1) % numProjects;
  newProject = projectCycler["projectNumber"];

  for (let i = 0; i < numProjects; i++) {
    project = projects[i];
    if (i === newProject) {
      project.classList.add("project-grid");
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
      project.classList.remove("project-grid");
    }
  }
}
