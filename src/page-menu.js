"use strict";
import PlainPizza from './pics/food/pizza-restaurant-dinner-lunch.jpg'
import Wings from './pics/food/pexels-zabdi-onan-caceres-7734563.jpg';
import OldFashioned from "./pics/food/pexels-alesia-kozik-6072095.jpg";

console.log("loading menu");

//Factory which makes Pizza Card
function createItem(name, price, picture, options) {
    function buildCard() {
        const container = document.createElement("div");
        container.className = "pizza__card";

        const infoCard = createInfoCard(name, options);
        const containerPrice = createPriceCard(price);
        const containerPicture = document.createElement("img");
        containerPicture.src = picture;
        containerPicture.style.aspectRatio = "2/1";
        containerPicture.style.objectFit = "cover";

        //Formats array and removes initial comma

        container.append(containerPicture, infoCard, containerPrice,);

        return container;
    }
    return { buildCard };
}
//Creates the UI for the Title and Options Card
function createInfoCard(name, options) {
    const infoCard = document.createElement("div");
    infoCard.className = "infoCard";
    const containerName = document.createElement("h2");
    containerName.textContent = name;

    const containerOptions = document.createElement("p");
    let optionsFormatted = ""
    options.forEach(element => {
        optionsFormatted += `, ${element}`
    });
    containerOptions.textContent = optionsFormatted.slice(2, optionsFormatted.length);
    infoCard.append(containerName, containerOptions);
    return infoCard;
}
//Creates the UI for the Price Section underneath the title
function createPriceCard(price) {
    const priceCard = document.createElement("div");
    priceCard.className="price";
    const containerPrice = document.createElement("h2");
    containerPrice.textContent = "P " + price;
    const containerSelect = document.createElement("button");
    containerSelect.textContent="Select";
    priceCard.append(containerPrice, containerSelect);
    return priceCard;
}
const loversPizzaLine = createItem("Lovers Line", 350, PlainPizza, ["Spicy Pepperoni Lovers", "Pepperoni Lovers", "Veggie Lovers", "Cheese Lovers"]);
const wingsLine = createItem("Wings Line", 560, Wings, ["Buffalo", "Garlic Parmesian", "Soy Garlic"])
const oldLine = createItem("Old Fashioned Line", 780, OldFashioned, ["Parmesian", "Margherita", "Aglio Alio", "Olive", "British"])
const menuOutput = document.createElement("div");
menuOutput.className = "pizza__List"
menuOutput.append(loversPizzaLine.buildCard(), wingsLine.buildCard(), oldLine.buildCard());

export { menuOutput };
