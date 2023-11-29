
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const container = document.getElementById('container');
let tableSize = 16;
function createTable (container, tableSize){
    
    // Create a 16x16 grid of square divs
    for (let i = 0; i < tableSize; i++) {
        for (let j = 0; j < tableSize; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${320 / tableSize}px`;
            square.style.height = `${320 / tableSize}px`;
            container.appendChild(square);

            // Add event listeners for hover effect
            square.addEventListener('mouseenter', () => {
                square.classList.add('hovered');
                square.style.backgroundColor = getRandomColor();

            });

            square.addEventListener('mouseleave', () => {
                square.classList.remove('hovered');
                square.style.backgroundColor = '';
            });
        }
    }
}

createTable(container, tableSize);


const button = document.querySelector(".button");

button.addEventListener("click", () => {
    let userInput = parseInt(prompt("Enter a grid size less than 100."));
    console.log(userInput);
    if (!isNaN(userInput) && userInput < 100){
        tableSize = userInput;
        console.log(tableSize);

        container.innerHTML = '';
        createTable(container, tableSize);
    }

});

