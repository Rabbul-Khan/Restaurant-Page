import milkTeaImage from "../images/milk-tea-image.jpg";
import cookieImage from "../images/cookie-image.jpg";

const secondPageLoad = () => {
  let contentNode = document.getElementById("content");
  let gridNode = document.createElement("div");
  gridNode.classList.add("menu-grid");

  let dishOne = document.createElement("div");
  dishOne.classList.add("dish", "dish-one");
  let dishOneImage = document.createElement("img");
  dishOneImage.classList.add("dish-one-image", "dish-image");
  dishOneImage.src = milkTeaImage;
  dishOne.appendChild(dishOneImage);

  let dishOneName = document.createElement("h3");
  dishOneName.classList.add("dish-name");
  dishOneName.textContent = "Milk Tea";
  dishOne.appendChild(dishOneName);
  gridNode.appendChild(dishOne);

  let dishTwo = document.createElement("div");
  dishTwo.classList.add("dish", "dish-two");
  let dishTwoImage = document.createElement("img");
  dishTwoImage.classList.add("dish-two-image", "dish-image");
  dishTwoImage.src = cookieImage;
  dishTwo.appendChild(dishTwoImage);

  let dishTwoName = document.createElement("h3");
  dishTwoName.classList.add("dish-name");
  dishTwoName.textContent = "Cookies";
  dishTwo.appendChild(dishTwoName);
  gridNode.appendChild(dishTwo);

  contentNode.appendChild(gridNode);
};

export { secondPageLoad };
