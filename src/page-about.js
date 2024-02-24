"use strict";
const aboutOutput = document.createElement("div");
aboutOutput.className="aboutOutput";
const question = document.createElement("h2");
question.textContent = "Have a question? Reach out to us at:";
const number = document.createElement("p");
number.textContent = "0957232875";
aboutOutput.append(question,number);

export {aboutOutput};
console.log("loading about");
