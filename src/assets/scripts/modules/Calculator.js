import $ from 'jquery'

class Calculator {
  constructor() {
    this.ans = 0;
    this.history = [];
    this.historyDisplay = '';
    this.output = '';
    this.outputPretty = '';
    this.isClear = true;
  }

  answer() {
    this.buildOutput(this.ans)
  }

  buildOutput(btn) {
    this.output += btn;
    this.outputPretty = this.output.replace(/\*/g, '&times;').replace(/\-/g, '&minus;').replace(/\//g, '&divide;')
    $('#output').html(this.outputPretty);
  }

  buildHistory() {
    if (this.history.length > 3) {
      this.history.shift();
    }
    if (this.history[this.history.length - 1] !== '=undefined') {
      this.historyDisplay = '';
      for (let i = 0; i < this.history.length; i++) {
        this.historyDisplay += '<p class="history__output">' + this.history[i]  + '</p>';
      }
    }
    this.outputHistory();
  }

  calculate() {
    this.isClear = true;
    this.result = eval(this.output);
    this.ans = this.result;
    this.history.push('<span class="history__history">' + this.outputPretty + ' =</span><br /><span class="history__result">' + this.result + "</span>")
    $('#output').html('0');
    this.buildHistory();
  }

  clearEntry() {
    this.historyDisplay = this.historyDisplay.substring(0, this.historyDisplay.length-1);
    this.output = this.output.substring(0, this.output.length-1);
    this.buildOutput('');
    this.buildHistory();
  }

  outputHistory() {
    $('#history').html(this.historyDisplay)
  }

  reset(isCls) {
    if (isCls) {
      this.history = [];
      this.historyDisplay = '';
      this.output = 0;
      this.isClear = true;
    } else {
      this.output = '';
    }
    this.result = 0;
    $('#output').text(this.output);
    $('#history').html(this.historyDisplay)
  }
}

export default Calculator;