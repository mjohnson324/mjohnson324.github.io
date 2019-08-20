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
    tab.classList.remove('hidden');
  });
}

function hideTabs() {
  const tabs = document.querySelectorAll("#page-tabs a");
  tabs.forEach(tab => {
    tab.removeEventListener("click", hideTabs);
    tab.classList.add('hidden');
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
  addLink("resume", "assets/resume/resume.pdf");
  addLink("email", "mailto:michaelwilliamjohnson777@gmail.com");
}

function addLink(text, href) {
  const container = document.getElementById("modal");
  const link = document.createElement("a");
  link.setAttribute("class", "button");
  link.setAttribute("href", href);
  link.innerText = text;
  container.appendChild(link);
}

function removeModal(e) {
  e.preventDefault();
  const modal = document.getElementById("modal");
  modal.removeChild(modal.children[1]);
  modal.removeChild(modal.children[0]);
  modal.removeEventListener("click", removeModal);
  modal.parentNode.removeChild(modal);
}