/* eslint-disable no-alert */
/* eslint-disable no-alert */
export default class GameBoard {
  constructor(size) {
    this.size = size ** 2;
    this.nextIndex = 0;
    this.lastIndex = 0;
    this.board = document.getElementById('board');
    this.hits = 0;
    this.misses = 0;
    this.hitsCounter = document.getElementById('hits');
    this.missesCounter = document.getElementById('misses');
  }

  draw() {
    for (let i = 0; i < this.size; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.id = `cell${i}`;
      this.board.appendChild(cell);
    }
    setInterval(() => {
      while (this.nextIndex === this.lastIndex) {
        this.nextIndex = Math.floor(Math.random() * this.size);
      }

      const lastCell = document.getElementById(`cell${this.lastIndex}`);
      lastCell.innerHTML = '';
      const nextCell = document.getElementById(`cell${this.nextIndex}`);
      nextCell.innerHTML = '<img class="goblin" src = "../src/img/goblin.png">';
      this.lastIndex = this.nextIndex;
      this.misses += 1;
      this.missesCounter.innerHTML = this.misses;
      if (this.misses > 5) {
        clearInterval();
        alert('Sorry! You lost!');
        this.newGame();
      }
    }, 1000);
  }

  newGame() {
    this.hits = 0;
    this.misses = 0;
    this.hitsCounter.innerHTML = this.hits;
    this.missesCounter.innerHTML = this.misses;
  }
}
