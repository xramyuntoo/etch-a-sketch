body = document.querySelector("body");
container = document.createElement("div");
container.id = "container";

for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "sketchBox";
    
    newDiv.addEventListener("mouseover", (event) => {
        newDiv.style.backgroundColor = "black";
    });
    container.appendChild(newDiv);
}





body.appendChild(container);