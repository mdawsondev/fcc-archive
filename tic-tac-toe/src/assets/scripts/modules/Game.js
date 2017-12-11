import $ from 'jquery';


export default class Game {
  constructor() {
    this.ai = true;
    this.aiDifficulty = 0;
    this.currentPlayer = 1;
    this.currentSymbol = 'o';
    this.lastMove = null;
    this.name = "Tic Tac Zen";
    this.player1 = [];
    this.player2 = [];
    this.winCombos = [
      '123',
      '147',
      '159',
      '258',
      '357',
      '369',
      '456',
      '789'
    ];
  }

  addPiece(el) {
    $(el).html('<span class="board__square__symbols">' + this.currentSymbol + '</span>');
    setTimeout(() => {
      $('.board__square__symbols').css('opacity', 1);      
    }, 100);
    this['player' + this.currentPlayer].push($(el).attr('id'));
    this.lastMove = $(el).attr('id');
    this.checkWin();
  }

  aiTurn(config) {
    if (config == 0) {
      let selection = $('.board__square');
      let random = Math.floor(Math.random() * 9)
      if ($(selection[random]).text() == '') {
        setTimeout(() => {
          this.addPiece($(selection[random]));
        }, 1000)
      } else {
        this.aiTurn(0);
      }
    }
    if (config == 1) {
      let random = Math.floor(Math.random() * 2);
      if (random = 1) {
        random = Math.floor(Math.random() * 8)

      } else {
        this.aiTurn(0);
      }
    }
  }

  checkWin() {
    for (let i = 0; i < this['player' + this.currentPlayer].length; i++) {
      let possible = this.winCombos.filter(combo => combo[0] == this['player' + this.currentPlayer][i]);
      for (let j = 0; j < possible.length; j++) {
        if (possible[j] !== undefined) {
          if (this['player' + this.currentPlayer].indexOf(possible[j][1]) > -1 && this['player' + this.currentPlayer].indexOf(possible[j][2]) > -1) {
            this.confirmWin();
            return;
          }
        }
      }
    }
    this.endTurn();
  }

  confirmTie() {
    $('.board').hide();
    $('#notice__text').html('Game tied!');
    setTimeout((e) => {
      $('.notice').css('opacity', 1);
    }, 100)
    setTimeout((e) => {
      $('.notice').css('opacity', 0);
    }, 2000)
    setTimeout((e) => {
      $('#notice__text').html('')
      this.newGame();
    }, 3000)
  }

  confirmWin() {
    $('.board').hide();
    if (this.ai && this.currentPlayer == 2) {
      this.currentPlayer = 'A.I.';
    }
    $('#notice__text').html('Player ' + this.currentPlayer + ' wins!');
    setTimeout((e) => {
      $('.notice').css('opacity', 1);
    }, 100)
    setTimeout((e) => {
      $('.notice').css('opacity', 0);
    }, 2000)
    setTimeout((e) => {
      $('#notice__text').html('')
      this.newGame();
    }, 3000)
  }

  endTurn() {
    if (this.player1.length + this.player2.length == 9) {
      this.confirmTie();
      return;
    }
    this.swapSymbol()
    if (this.currentPlayer == 1) {
      this.currentPlayer = 2;
      if (this.ai) {
        this.aiTurn(this.aiDifficulty);
      }
    } else {
      this.currentPlayer = 1;
    }
  }

  newGame() {
    this.currentPlayer = 1;
    this.lastMove = null;
    this.player1 = [];
    this.player2 = [];
    $('.board__square').html('')
    $('.players').show();
  }

  swapSymbol() {
    if (this.currentSymbol == 'o') 
      this.currentSymbol = 'x';
    else
      this.currentSymbol = 'o';
  }

}
