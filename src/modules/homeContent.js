import Map from "../images/map.png";

import { descriptor } from "./descriptor";

export default function homeContent() {
  const content = document.createElement("div");
  content.classList.add("pageContent");

  function renderContent() {
    function renderContentLeft() {
      const contentLeft = document.createElement("div");
      contentLeft.classList.add("contentLeft");

      const map = new Image();
      map.src = Map;

      map.classList.add("map");

      contentLeft.appendChild(map);
      content.append(contentLeft);
    }

    function renderContentRight() {
      const contentRight = document.createElement("div");
      contentRight.classList.add("contentRight");

      const contentRightTop = document.createElement("div");
      const contentRightBottom = document.createElement("div");
      contentRightTop.classList.add("contentRightTop");
      contentRightBottom.classList.add("contentRightBottom");

      const title = document.createElement("h1");
      const subtitle = document.createElement("h2");
      const description = document.createElement("div");
      title.classList.add("title");
      subtitle.classList.add("subtitle");
      description.classList.add("description");

      title.innerHTML = "Gazelle Diner!";
      subtitle.innerHTML =
        "Experience the Taste of the Savannah at Gazelle Diner";
      for (let i = 0; i < 3; i += 1) {
        const paragraph = document.createElement("p");
        paragraph.classList.add("descriptionPara");
        paragraph.innerHTML = descriptor[i];
        description.appendChild(paragraph);
      }

      contentRightTop.append(title, subtitle);
      contentRightBottom.append(description);

      contentRight.append(contentRightTop, contentRightBottom);

      content.append(contentRight);
    }

    renderContentLeft();
    renderContentRight();
  }

  renderContent();

  return content;
}
