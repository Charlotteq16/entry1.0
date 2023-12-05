
/*const frame = document.getElementById("frame");
frame.addEventListener("click", changeFrame);

function changeFrame(){
    frame.classList.toggle("xheart");
    console.log(frame);
}


const badgeBtn = document.getElementById("badge-btn");
const xheartBtn = document.getElementById("xheart-btn");


const body = document.body;

badgeBtn.addEventListener("click", () => selectFrame("badge-btn"));
xheartBtn.addEventListener("click", () => selectFrame("xheart-btn"));

function selectFrame(buttonId) {
    console.log(buttonId);

    switch (buttonId) {
        case 'badge-btn':
            frame.className = "frame";
            body.style.backgroundColor = "rgb(245, 167, 193)";  // Reset background color
            break;

        case 'xheart-btn':
            frame.className = "frame xheart";
            body.style.backgroundColor = "#45060c";  // Set desired background color
            break;
    }
}*/


const frame = document.getElementById("frame");
const body = document.body;
const textContainer = document.getElementById("text-container"); // Add an id to the container where you want to display the text

const badgeBtn = document.getElementById("badge-btn");
const xheartBtn = document.getElementById("xheart-btn");

badgeBtn.addEventListener("click", () => selectFrame("badge-btn"));
xheartBtn.addEventListener("click", () => selectFrame("xheart-btn"));

function selectFrame(buttonId) {
    console.log(buttonId);

    // Reset previous text
    textContainer.innerHTML = "";

    switch (buttonId) {
        case 'badge-btn':
            frame.className = "frame";
            body.style.backgroundColor = "rgb(245, 167, 193)";  // Reset background color
            break;

        case 'xheart-btn':
            frame.className = "frame xheart";
            body.style.backgroundColor = "#45060c";  // Set desired background color
            
            // Create and append new text
            const newText = document.createElement("p");
            newText.textContent = "Obsession ≠ Love";
            textContainer.appendChild(newText);
            break;
    }
}





