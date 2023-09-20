body = document.querySelector("body");
container = document.createElement("div");
container.id = "container";

for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "sketchBox";
    container.appendChild(newDiv);
}

body.appendChild(container);