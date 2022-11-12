const thirdPageLoad = () => {
  let contentNode = document.getElementById("content");

  let locationNode = document.createElement("div");
  let locationNodeTitleNode = document.createElement("h3");
  locationNodeTitleNode.classList.add("location");
  locationNodeTitleNode.textContent =
    "Road 27, Sheikh Kamal Sarani, Dhanmondi, Dhaka 1209, Bangladesh";

  locationNode.appendChild(locationNodeTitleNode);
  contentNode.appendChild(locationNode);
};

export { thirdPageLoad };
