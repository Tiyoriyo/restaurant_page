import initialPage from "./modules/initialPageLoad";
import homeContent from "./modules/homeContent";
import menuContent from "./modules/menuContent";
import contactContent from "./modules/contact";
import footerLinkContent from "./modules/footerLinksContent";
import "./style.css";

const mainContainer = document.querySelector("#content");
mainContainer.appendChild(initialPage());
const contentContainer = document.querySelector(".pageContainer");
contentContainer.appendChild(homeContent());

const navBarLinks = document.querySelectorAll(".link");
const footBarLinks = document.querySelectorAll(".footLink");

function unActive() {
  navBarLinks.forEach((link, index) => {
    navBarLinks[index].className = "link";
  });
  footBarLinks.forEach((link, index) => {
    footBarLinks[index].className = "footLink";
  });
}

function logoHomeButton() {
  contentContainer.innerHTML = "";
  contentContainer.appendChild(homeContent());
  unActive();
  navBarLinks[0].classList += " active";
}

const logo = document.querySelector(".logo");
logo.addEventListener("click", logoHomeButton);

navBarLinks.forEach((link, index) =>
  navBarLinks[index].addEventListener("click", (e) => {
  switch (index) {
    case 0: 
      unActive();
        e.target.classList += " active";
        contentContainer.innerHTML = "";
      contentContainer.appendChild(homeContent());
      break;
    case 1:
      unActive();
        e.target.classList += " active";
        contentContainer.innerHTML = "";
      contentContainer.appendChild(menuContent());
      break;
    case 2:
      unActive();
        e.target.classList += " active";
        contentContainer.innerHTML = "";
      contentContainer.appendChild(contactContent());
      break;
    default:
        break;
  }
  })
);

footBarLinks.forEach((link, index) =>
  footBarLinks[index].addEventListener("click", (e) => {
  switch (index) {
    case 0:
      unActive();
        e.target.classList += " active";
        contentContainer.innerHTML = "";
        contentContainer.appendChild(footerLinkContent("about"));
      break;
    case 1:
      unActive();
        e.target.classList += " active";
        contentContainer.innerHTML = "";
        contentContainer.appendChild(footerLinkContent("privacy"));
      break;
    case 2:
      unActive();
        e.target.classList += " active";
        contentContainer.innerHTML = "";
        contentContainer.appendChild(footerLinkContent("t&c"));
      break;
    default:
        break;
  }
  })
);
