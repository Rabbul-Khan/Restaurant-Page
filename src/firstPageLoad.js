const firstPageLoad = () => {
  let contentNode = document.getElementById("content");

  let restaurantInformation = document.createElement("p");
  restaurantInformation.classList.add("info");
  restaurantInformation.textContent =
    "Trusty Teapot is a tea place in the bylanes of Dhaka. A favourite hangout spot of young and old. Be sure to have a fun time with the adorable kitten who welcomes you at the cafe with its cuteness every single time.";
  contentNode.append(restaurantInformation);
};

export { firstPageLoad };
