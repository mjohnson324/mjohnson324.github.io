function setupProjects() {
  const projectButtons = document.getElementsByClassName("tab");
  for (const button of projectButtons) {
    button.addEventListener("click", showProject);
  }
}

function showProject(currentButton) {
  const text = currentButton.innerText;
  const projectButtons = document.getElementsByClassName("tab");
  const projects = document.getElementsByClassName("project");

  for (const button of projectButtons) {
    if (button === currentButton) {
      button.classList.remove("hidden-border");
    } else {
      button.classList.add("hidden-border");
    }
  }

  for (const project of projects) {
    projectTitle = project.firstElementChild.innerText;
    if (projectTitle === text) {
      project.classList.add("project-grid");
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
      project.classList.remove("project-grid");
    }
  }
}

setupMenu();
setupProjects();
