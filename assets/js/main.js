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
    tab.classList.remove('nav-display');
  });
}

function hideTabs() {
  const tabs = document.querySelectorAll("#page-tabs a");
  tabs.forEach(tab => {
    tab.removeEventListener("click", hideTabs);
    tab.classList.add('nav-display');
  });
  menuButton.tabbed = false;
}