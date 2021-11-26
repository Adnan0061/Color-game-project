var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square')
var pickedColorr = pickedColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var topDiv = document.getElementById('top');

colorDisplay.innerText = pickedColorr;

var newColor = document.getElementById('new-color')
newColor.addEventListener('click', function(){
    game(numSquares)  
    topDiv.style.backgroundColor = '#4278AB';
    colorDisplay.style.color = '#fff'
    messageDisplay.innerText = ''
})

for(var square of squares.entries()){
    square[1].style.backgroundColor = colors[square[0]];
    square[1].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor == pickedColorr){
            messageDisplay.innerText = 'Correct'
            messageDisplay.style.color = pickedColorr;
            allSquareChange();
            topDiv.style.backgroundColor = pickedColorr;
        }
        else{
            this.style.backgroundColor = 'transparent'
            messageDisplay.innerText = 'Try again'
            messageDisplay.style.color = 'tomato';
        }
    })
}

function allSquareChange(){
    for(var square of squares){
        square.style.backgroundColor = pickedColorr;
    }
}

function pickedColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(number){
    var arr = [];
    for(var i=0; i < number; i++){
    var r = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
        var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        arr.push(rgb)
    }
    console.log('generate ' + arr)
    return arr;
}
function game(number){
    colors = generateRandomColors(number);
    pickedColorr = pickedColor();
    colorDisplay.innerText = pickedColorr;
    if(number == 3){
        for(var i=1; i<=3; i++){
        var newSquare = squares[squares.length - i]
        newSquare.classList.remove('square')
        console.log('33  ' + newSquare.length)
        }
    }
    else if(number == 6){
        for(var i=1; i<=3; i++){
        squares[squares.length - i].classList.add('square')
        console.log(squares.length)
        }
    }
    for(var square of squares.entries()){
        square[1].style.backgroundColor = colors[square[0]];
    }
}
var numSquares = 6;
var hard = document.getElementById('hard')
hard.addEventListener('click', function(){
    numSquares = 6;
    game(numSquares);
    this.classList.add('selected')
    easy.classList.remove('selected')
    messageDisplay.innerText = ''
    topDiv.style.backgroundColor = '#4278AB';

})
var easy = document.getElementById('easy')
easy.addEventListener('click', function(){
    numSquares = 3;
    game(numSquares);
    this.classList.add('selected')
    hard.classList.remove('selected')
    messageDisplay.innerText = ''
    topDiv.style.backgroundColor = '#4278AB';
})
