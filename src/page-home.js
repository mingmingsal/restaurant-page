"use strict";
import BaseImage from "./pics/food/pexels-desativado-2608049.jpg"
import Logo from './pics/mama lous.png'
import Photo1 from './pics/people/pexels-elle-hughes-2696064.jpg'
import Photo2 from './pics/people/pexels-elevate-1267320.jpg'
console.log("loading home");
const title = "";
const homeOutput = document.createElement("div");
const banner = document.createElement("div");
const bannerImage = document.createElement("img");
const logoImage = document.createElement("img");
const infoOutput = document.createElement("div");
infoOutput.className = "infoOutput";
logoImage.className = "logoImage";
logoImage.src = Logo;
banner.className= "banner";
banner.append(bannerImage);

bannerImage.className="bannerImage";
bannerImage.src = BaseImage;
homeOutput.append(banner);

function createBlock (title,text,buttonText, photo){
    const block = document.createElement("div");
    block.className = "infoBlock";
    const textBlock = document.createElement("div");
    const mainText = document.createElement("h2");
    const subText = document.createElement("p");
    const btnText = document.createElement("button");
    const photoBlock = document.createElement("img");
    photoBlock.src = photo;
    mainText.textContent = title;
    subText.textContent = text;
    btnText.textContent = buttonText;
    textBlock.append(mainText);
    textBlock.append(subText);
    textBlock.append(btnText);
    block.append(textBlock);
    block.append(photoBlock)
    return block;

}
banner.append(logoImage);

const baseBlock = createBlock("The Best Pizza in the Philippines","What started as a passion for cooking dishes made with unconditional love back in 2010, has now become Mama Lou’s Hospitality Group comprising of two restaurant concepts -- Mama Lou's Italian Kitchen & Nonna's Pasta and Pizzeria -- and Mamafood Cloud Kitchen, serving Filipino hospitality with a wide-variety of your favorite cuisines. ", "About Us", Photo1);
const baseBlock2 = createBlock("Our Restaurants and Brands", "Mama Lou's Hospitality Group gave life to multiple award-winning, family favorite restaurants and ridiculously creative cloud kitchen brands with impeccable service & Filipino hospitality.","Know More",Photo2)

infoOutput.append(baseBlock, baseBlock2);
homeOutput.append(infoOutput);

export {homeOutput};