/*
  Define global variables here:
    1) isWinning represents a boolean variable that indicate whether current user is winning or not.
    2) cards represents a list of all elements with class name defined as 'card'.
    3) drawBtn represents a button element which id is 'draw-button' from HTML DOM.
      -> This btn will draw a card when it has clicked by user.
    4) restartBtn represents a button element which id is 'refresh-button' from HTML DOM.
      -> This btn will restart the game when clicked.
    5) displayedCards represents an array of cards that has been displayed on game board.
    6) drawnCards represents an array of cards that has already been picked.
    7) gameBoard represent an array of 4by4 bingo gameboard.
       - Default Look:
        | 0 0 0 0 |
        | 0 0 0 0 |
        | 0 0 0 0 |
        | 0 0 0 0 |
*/
let isWinning = false;
let cards = document.getElementsByClassName('card');
let drawBtn = document.getElementById('draw-button');
let restartBtn = document.getElementById('restart-game-button');
let displayedCards = [];
let drawnCards = [];
let gameBoard = Array(16).fill(0);