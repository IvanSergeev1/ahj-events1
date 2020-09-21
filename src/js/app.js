import GameBoard from './classes/GameBoard';
import GamePlay from './classes/GamePlay';

const gameBoard = new GameBoard(4);
gameBoard.draw();

const gamePlay = new GamePlay(gameBoard);
gamePlay.play();
