const drawingGrid = document.querySelector('#drawing-grid');

const square = document.createElement('div');
    square.classList.add("square");

for(i=0; i <16; i++){
    drawingGrid.appendChild(square);
}