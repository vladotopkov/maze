
let smile = document.querySelector('.smile-cell');
const img = document.querySelector('.smile-cell img');
const maze = document.querySelector('.maze');
const finishImg = document.querySelector('.finish img');


let squares = Array.from(maze.children);
let start = 0;
let finish = squares.findIndex((el) => el.classList.contains('finish'));
let currentSquare = 0;
let rowMin = 4;


window.addEventListener('keydown', (e) => {

    let row = Math.floor(currentSquare / 5);
    let col = currentSquare % 5;

    if (e.key === 'ArrowUp') {
        if(row <= 0) {
            reset("You've lost");
        }else {
            squares[currentSquare - 5].appendChild(img);
            currentSquare = currentSquare - 5; 
            checkWall();
            checkFinish();
        }
      }
      if (e.key === 'ArrowDown') {
        if(row >= 4) {
            reset("You've lost");
        }else {
            squares[currentSquare + 5].appendChild(img);
            currentSquare = currentSquare + 5;
            checkWall(); 
            checkFinish(); 
        }
      }
      if (e.key === 'ArrowLeft') {
        if(col <= 0) {
            reset("You've lost");
        }else {
            squares[--currentSquare].appendChild(img);  
            checkWall(); 
            checkFinish();
        }
      }
      if (e.key === 'ArrowRight') {
        if(col >= 4) {
            reset("You've lost");
        }else {
            squares[++currentSquare].appendChild(img);
            checkWall();
            checkFinish();
        }
      }
});


function reset(messege){
    alert(messege);
    squares[0].appendChild(img);
    currentSquare = 0;
    if(messege === "You are the Winner"){
        squares[finish].appendChild(finishImg);
    }
}


function checkWall(){
    if(squares[currentSquare].classList.contains('wall')){
        setTimeout(() => reset("you've lost"), 1);
    }
}

function checkFinish(){
    if(squares[currentSquare].classList.contains('finish')){
        squares[finish].innerHTML = '';
        squares[finish].appendChild(img);
        setTimeout(() => onFinish(), 100);
    }
}


function onFinish(){
    reset("You are the Winner");
    randomWall();
}

function randomWall() {
    let results = squares.filter(el => el !== squares[start] && 
        el !== squares[finish] && !el.classList.contains("wall"));
    
    let randomIndex = Math.floor(Math.random() * (results.length + 1));
    results[randomIndex].classList.add('wall'); 
}

