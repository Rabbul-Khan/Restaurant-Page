import { firstPageLoad } from "./firstPageLoad";
import { secondPageLoad } from "./secondPageLoad";
import { thirdPageLoad } from "./thirdPageLoad";
import { addInitialContentDiv } from "./addInitialContentDiv";
import "./style.css";

addInitialContentDiv();

let contentNode = document.getElementById("content");
let homeMenuNode = document.getElementsByClassName("tab-menu-item")[0];
let dishesMenuNode = document.getElementsByClassName("tab-menu-item")[1];
let locationMenuNode = document.getElementsByClassName("tab-menu-item")[2];

homeMenuNode.addEventListener("click", () => {
  contentNode.replaceChildren();
  firstPageLoad();
});

dishesMenuNode.addEventListener("click", () => {
  contentNode.replaceChildren();
  secondPageLoad();
});

locationMenuNode.addEventListener("click", () => {
  contentNode.replaceChildren();
  thirdPageLoad();
});

//   DOES NOT WORK WHY?????????
//   for (let i = 0; i < 3; i++) {
//   let tabMenuItem = document.createElement("div");
//   tabMenuItem.classList.add("tab-menu-item");
//   tabMenuNode.appendChild(tabMenuItem);
// }
//
// let homeMenuNodeTwo = document.getElementsByClassName("tab-menu-item")[0];
// console.log(homeMenuNode);
// homeMenuNode.innerHTML = "Home";

firstPageLoad();
