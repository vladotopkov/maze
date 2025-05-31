
let smile = document.querySelector('.smile-cell');
const img = document.querySelector('.smile-cell img');
const maze = document.querySelector('.maze');

let squares = Array.from(maze.children);
let currentSquare = 0;
let rowMin = 4;



window.addEventListener('keydown', (e) => {

    let row = Math.floor(currentSquare / 5);
    let col = currentSquare % 5;

    if (e.key === 'ArrowUp') {
        if(row <= 0) {
            alert("you loose" + currentSquare)
            reset();
        }else {
            squares[currentSquare - 5].appendChild(img);
            currentSquare = currentSquare - 5; 
        }
      }
      if (e.key === 'ArrowDown') {
        if(row >= 4) {
            alert("you loose" + currentSquare)
            reset();
        }else {
            squares[currentSquare + 5].appendChild(img);
            currentSquare = currentSquare + 5;   
        }
      }
      if (e.key === 'ArrowLeft') {
        if(col <= 0) {
            alert("you loose" + currentSquare)
            reset();
        }else {
            squares[--currentSquare].appendChild(img);   
        }
      }
      if (e.key === 'ArrowRight') {
        if(col >= 4) {
            alert("you loose" + currentSquare)
            reset();
        }else {
            squares[++currentSquare].appendChild(img);
        }
      }
});


function reset(){
    squares[0].appendChild(img);
    currentSquare = 0;
}


