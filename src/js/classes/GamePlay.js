/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
export default class GamePlay {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
  }

  play() {
    this.gameBoard.board.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('goblin')) {
        event.target.style.cursor = 'url("../src/img/hammer.png"), pointer';
      } else {
        event.target.style.cursor = 'auto';
      }
    });
    this.gameBoard.board.addEventListener('click', (event) => {
      if (event.target.classList.contains('goblin')) {
        this.gameBoard.hits += 1;
        this.gameBoard.misses -= 1;
        this.gameBoard.hitsCounter.innerHTML = this.gameBoard.hits;
        event.target.parentNode.innerHTML = '';
      } else {
        this.gameBoard.misses += 1;
        this.gameBoard.missesCounter.innerHTML = this.gameBoard.misses;
      }
      if (this.gameBoard.hits === 10) {
        alert('Congratulations! You win!');
        this.gameBoard.newGame();
      }
      if (this.gameBoard.misses >= 5) {
        alert('Sorry! You lost!');
        this.gameBoard.newGame();
      }
    });
  }
}
