const menuButton = document.getElementById("menu-button");
menuButton.tabbed = false;
menuButton.addEventListener("click", activateTabs);

function activateTabs(e) {
  e.preventDefault();
  if (menuButton.tabbed === false) {
    displayTabs();
    menuButton.tabbed = true;
  } else {
    hideTabs();
  }
}

function displayTabs() {
  const tabs = document.querySelectorAll("#page-tabs a");
  tabs.forEach(tab => {
    tab.addEventListener("click", hideTabs);
    tab.classList.remove("hidden");
  });
}

function hideTabs() {
  const tabs = document.querySelectorAll("#page-tabs a");
  tabs.forEach(tab => {
    tab.removeEventListener("click", hideTabs);
    tab.classList.add("hidden");
  });
  menuButton.tabbed = false;
}

const mockdoc = document.getElementById("mockdoc-tab");
const blockhead = document.getElementById("blockhead-tab");
const rdcover = document.getElementById("rdcover-tab");
const tabButtons = [mockdoc, blockhead, rdcover];
tabButtons.forEach(button => {
  button.addEventListener("click", cycleProjects);
});

function cycleProjects(e) {
  e.preventDefault();
  const currentID = e.target.id;
  tabButtons.forEach(button => {
    let classes = button.classList;
    let projectID = button.id.split("-")[0];
    let project = document.getElementById(projectID);
    if (button.id === currentID && classes.contains("hidden-border")) {
      button.classList.remove("hidden-border");
      project.classList.remove("hidden");
    } else if (button.id !== currentID && classes.contains("hidden-border") === false) {
      button.classList.add("hidden-border");
      project.classList.add("hidden");
    }
  });
}

const hireButton = document.getElementById("hire");
hireButton.addEventListener("click", showHire);

const emailLink = document.getElementById("email");
const resumeLink = document.getElementById("resume");

function positionCareerLinks() {
  const midWidth = window.innerWidth / 2;
  const midHeight = window.innerHeight / 2;
  const emailMidPoint = emailLink.offsetWidth / 2;
  const resumeMidPoint = resumeLink.offsetWidth / 2;
  emailLink.style.left = `${midWidth}px`;
  emailLink.style.marginLeft = `-${emailMidPoint}px`;
  emailLink.style.bottom = `${midHeight}px`;
  resumeLink.style.left = `${midWidth}px`;
  resumeLink.style.marginLeft = `-${resumeMidPoint}px`;
  resumeLink.style.top = `${midHeight}px`;
}

function showHire(e) {
  e.preventDefault();
  makeModal();
}

function makeModal() {
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  modal.addEventListener("click", removeModal);
  const container = document.getElementsByTagName("body")[0];
  container.appendChild(modal);
  emailLink.classList.remove("hidden");
  resumeLink.classList.remove("hidden");
  positionCareerLinks();
}

function removeModal(e) {
  e.preventDefault();
  const modal = document.getElementById("modal");
  modal.removeEventListener("click", removeModal);
  modal.parentNode.removeChild(modal);
  emailLink.classList.add("hidden");
  resumeLink.classList.add("hidden");
}