import $ from 'jquery';
import Calculator from './Calculator';

function init() {
  var calculator = new Calculator;
  $('.btn').click(function() {
    if (calculator.isClear) {
      calculator.reset(false);
    }
    if ((this.id > 0 && calculator.isClear) || (this.id >= 0 && !calculator.isClear)) {
      calculator.isClear = false;
    }
    if (!calculator.isClear || this.id != 0) {
      calculator.buildOutput(this.id)
    }
  })
  $('#total').click(function() {
    calculator.calculate();
  })
  $('#ac').click(function() {
    calculator.reset(true);
  })
  $('#ce').click(function() {
    calculator.clearEntry();
  })
  $('#ans').click(function() {
    calculator.answer();    
  })
}

init();
