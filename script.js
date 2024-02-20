const container = document.querySelector("#container");

const content = document.createElement("p");
const title = document.createElement("h3");
const div = document.createElement("div");
const titleSecond = document.createElement("h1");
const contentSecond = document.createElement("p");
div.classList.add("box");
title.style.color = "blue";
content.classList.add("content");
content.style.color = "red";
content.textContent = "Hey I'm red!";
title.textContent = "I'm a blue h3!";
titleSecond.textContent = "I’m in a div";
contentSecond.textContent = "ME TOO!";
container.appendChild(content);
container.insertBefore(title, content);
div.setAttribute("style", "background:pink; border:solid black");
container.appendChild(div);
div.appendChild(contentSecond);
div.insertBefore(titleSecond, contentSecond);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
