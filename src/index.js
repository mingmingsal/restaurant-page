"use strict";
import { menuOutput } from './page-menu.js';
import { homeOutput } from './page-home.js';
import { aboutOutput } from './page-about.js';
import Logo from './pics/mama lous.png'
import './styles.css';
const content = document.getElementById("content");
const nav = document.querySelector("nav");

console.log("Initializing website");

const buttons = (function () {

    const menu = document.querySelector(".menu");
    const home = document.querySelector(".home");
    const about = document.querySelector(".about");
    menu.addEventListener('click', () => clearContent(menu.className));
    home.addEventListener('click', () => clearContent(home.className));
    about.addEventListener('click', () => clearContent(about.className));
    return {
        home, about, menu
    }
})();
const navBar = (function () {
    const logo = nav.querySelector("img");
    logo.src = Logo;
})();

function clearContent(className) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    switch (className) {
        case "menu":
            content.appendChild(menuOutput);
            break;
        case "home":
            content.appendChild(homeOutput);
            break;
        case "about":
            content.appendChild(aboutOutput);
            break;
        default:
    }
}
const initialLoad = clearContent("home");
console.log("loading menu");
