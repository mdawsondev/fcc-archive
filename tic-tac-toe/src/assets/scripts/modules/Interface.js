import $ from 'jquery';
import Game from './Game';

function init() {
  var game = new Game;

  $('#title__name').html(game.name);

  $('.player').click((e) => {
    if ($(e.currentTarget).attr('id') == '2p') {
      game.ai = false;
    } 
    if ($(e.currentTarget).attr('id') == '1p') {
      game.ai = true;
    }
    $('.symbols').show();
    $(e.currentTarget).parent().hide();
  })

  $('.symbol').click((e) => {
    game.currentSymbol = $(e.currentTarget).text();
    $('.board').show();
    $('.symbols').hide();
  })

  $('.board__square').click((e) => {
    game.addPiece(e.currentTarget)
  });
};

init();1