import Simon from './Logic.js'

function init() {
  var simon = new Simon;
  var gamebtns = document.getElementsByClassName('gamebtn');

  /* Welcome! */
  simon.playSound(6);
  setTimeout(() => {
    simon.showTitle(true);
    setTimeout(() => {
      simon.showTitle(false);
      simon.showSettings(true);
    }, 3000)
  }, 1000)
  
  /* Begin the game! */
  document.getElementById('start').addEventListener('click', (e) => {
    simon.generateSequence();
  });

  /* Run input logic! */
  Array.from(gamebtns).forEach(function(element) {
    element.addEventListener('click', (e) => {
      simon.getInput(e.target);
    });
  });

  /* Reset the game! */
  document.getElementById('reset').addEventListener('click', (e) => {
    simon.resetGame();
  })

  /* Toggle strict mode! */
  document.getElementById('strict').addEventListener('click', (e) => {
    simon.toggleStrict(e.target);
  })
}

init();
