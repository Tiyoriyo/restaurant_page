import { descriptor } from "./descriptor";
import Pancakes from "../images/pancakes.png";
import Burger from "../images/burger.png";
import Cake from "../images/desert.png";

export default function render() {
  const content = document.createElement("div");
  content.classList.add("menuContent");

  const contentTop = document.createElement("div");
  contentTop.classList.add("contentTop");

  const title = document.createElement("h1");
  const subTitle = document.createElement("h2");
  title.classList.add("title", "noBorder");
  subTitle.classList.add("subtitle");

  title.innerHTML = "Savor the Flavors of Gazelle Diner";
  subTitle.innerHTML = "Explore our Delicious Menu Selections";

  contentTop.append(title, subTitle);

  const contentBottom = document.createElement("div");
  contentBottom.classList.add("contentBottom");

  for (let i = 3; i < 6; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");

    const itemImg = new Image();
    itemImg.classList.add("itemImg");

    const description = document.createElement("div");
    description.classList.add("itemDescriptionContainer");

    const title = document.createElement("h2");
    const itemDesc = document.createElement("p");
    title.classList.add("subtitle");
    itemDesc.classList.add("descriptionPara");

    description.append(title, itemDesc);
    menuItem.append(itemImg, description);

    switch (i) {
      case 3:
        title.innerHTML = "Fluffy Buttermilk Pancakes";
        itemDesc.innerHTML = descriptor[i];
        itemImg.src = Pancakes;
        break;
      case 4:
        title.innerHTML = "Gazelle Burger";
        itemDesc.innerHTML = descriptor[i];
        itemImg.src = Burger;
        break;
      case 5:
        title.innerHTML = "Decadent Chocolate Cake";
        itemDesc.innerHTML = descriptor[i];
        itemImg.src = Cake;
        break;
    }

    contentBottom.append(menuItem);
  }

  content.append(contentTop, contentBottom);

  return content;
}
