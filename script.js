let numOfTiles = 256;

body = document.querySelector("body");
container = document.createElement("div");
container.id = "container";
containerContainer = document.createElement("div");
containerContainer.id = "containerContainer";
button = document.createElement("button");
button.textContent = "Number Of Pixels";

button.addEventListener("click", () => {

    for (let i = numOfTiles; i > 0; i--) {
        oldDiv = document.getElementById("d" + i);
        oldDiv.remove();
    }
    numOfTiles = prompt("Please enter the number of pixels");
    for (let i = 0; i < numOfTiles; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "sketchBox";
        newDiv.id = "d" + (i+1);
        newDiv.addEventListener("mouseover", (event) => {
            newDiv.style.backgroundColor = "black";
        });
        container.appendChild(newDiv);
    }
});

for (let i = 0; i < numOfTiles; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "sketchBox";
    newDiv.id = "d"+ (i + 1);
    newDiv.addEventListener("mouseover", (event) => {
        newDiv.style.backgroundColor = "black";
    });
    container.appendChild(newDiv);
}
body.appendChild(button);
containerContainer.appendChild(container);
body.appendChild(containerContainer);