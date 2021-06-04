function solidEvent(e){
    this.classList.add('hovered');
}

function randomEvent(e){
    let r = Math.round(Math.random()*256);
    let b = Math.round(Math.random()*256);
    let g = Math.round(Math.random()*256);
    this.setAttribute('style', `background-color:rgba(${r}, ${b}, ${g}, 1)`);
}

function gradualEvent(e){
    let alpha = Number(this.getAttribute('data-alpha'));
    alpha = Math.min(1.0, alpha + 0.1);
    this.setAttribute('style', `background-color:rgba(0, 0, 0, ${alpha})`);
    this.setAttribute('data-alpha', alpha);
}

function makeGrid(size, onHover){
    for(let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < size; j++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseenter', onHover);
            cell.setAttribute('data-alpha', 0);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function promptSize(){
    size = Number(window.prompt('Squares per side:', ''));
    while(!Number.isInteger(size) || size <= 0)
    {
        size = Number(window.prompt('Squares per side:', ''));
    }
    size = Math.min(size, 100);
}

function deleteGrid(){
    container.innerHTML = '';
}

function solidMode(){
    deleteGrid();
    promptSize();
    makeGrid(size, solidEvent);
}

function randomMode(){
    deleteGrid();
    promptSize();
    makeGrid(size, randomEvent);
}

function gradualMode(){
    deleteGrid();
    promptSize();
    makeGrid(size, gradualEvent);
}

let size = 16;
const container = document.querySelector('#container');
makeGrid(size, solidEvent);