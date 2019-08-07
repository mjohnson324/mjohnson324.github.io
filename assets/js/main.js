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

function activateTabs() {
  if (menuButton.tabbed === false) {
    addTabs();
  } else {
    removeTabs();
    menuButton.tabbed = true;
  }
  menuButton.tabbed = !menuButton.tabbed;
}

function addTabs() {
  const tabs = [
    { destination: "#skills", text: "Skills" },
    { destination: "#projects", text: "Projects" },
    { destination: "#contact", text: "Contact" }
  ];
  tabs.forEach(tab => { addTab(tab) });
}

function addTab({ destination, text }) {
  const container = document.getElementById("page-tabs");
  const tab = document.createElement("a");
  tab.setAttribute("href", destination);
  tab.innerText = text;
  tab.addEventListener("click", removeTabs);
  container.appendChild(tab);
}

function removeTabs() {
  const tabs = document.querySelectorAll("#page-tabs a");
  tabs.forEach(tab => {
    tab.removeEventListener("click", removeTabs);
    tab.parentNode.removeChild(tab);
  });
  menuButton.tabbed = false;
}