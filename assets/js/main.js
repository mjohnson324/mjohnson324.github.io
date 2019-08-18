// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// function sizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   ctx.fillStyle = "rgba(42, 44, 162)";
//   ctx.fillRect(0,0, canvas.width, canvas.height);
// }
// sizeCanvas();
// window.addEventListener("resize", sizeCanvas);

const menuButton = document.getElementById("menu-button");
menuButton.tabbed = false;
menuButton.addEventListener("click", activateTabs);

function activateTabs(e) {
  e.preventDefault();
  if (menuButton.tabbed === false) {
    displayTabs();
  } else {
    hideTabs();
  }
  menuButton.tabbed = !menuButton.tabbed;
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
    tab.removeEventListener("click", removeTabs);
    tab.classList.add('nav-display');
  });
}