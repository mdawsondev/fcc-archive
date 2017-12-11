import Sound from './Sound';

export default class Simon {
  constructor() {
    this.player = [];
    this.sequence = [];
    this.sound = new Sound;
    this.strict = false;
    this.winScore = 20;
  }

  showTitle(option) {
    if (option) {
      document.getElementById('title').classList.add('title--visible');
    } else {
      document.getElementById('title').classList.remove('title--visible');
    }
  }

  showSettings(option) {
    if (option) {
      document.getElementById('settings').classList.add('settings--visible');
    } else {
      document.getElementById('settings').classList.remove('settings--visible');
    }
  }

  getInput(el) {
    this.player.push(el.id);
    if (this.player[this.player.length-1] != this.sequence[this.player.length-1]) {
      this.gameOver();
      this.resetInput();
    } else {
      this.playSound(Number(el.id));
      if (this.player.length == this.sequence.length) {
        this.resetInput();
        this.checkWin();
      }
    }
    setTimeout(() => {
      this.colorChange(el);
    }, 200)
  }
  
  colorChange(el) {
    if (el.classList.length == 2)
    el.classList.add(el.classList[1] + '-active');
    setTimeout(() => {
      el.classList.remove(el.classList[1] + '-active');
    }, 300);
  }

  checkWin() {
    if (this.sequence.length == this.winScore) {
      console.log('yay u did it buddy')
    } else {
      setTimeout(() => {
        this.generateSequence();
        this.updateCount();
      }, 1000);
    }
  }

  playSound(num) {
    this.sound['sound' + num].currentTime = 0;
    this.sound['sound' + num].play();
  }

  resetInput() {
    this.player = [];
  }

  resetGame() {
    this.player = [];
    this.sequence = [];
    this.generateSequence();
    this.updateCount();
  }

  toggleStrict(el) {
    if (this.strict) {
      this.strict = false;
    } else {
      this.strict = true;
      el.style.color = 'red'
    }
    console.log(el);
  }

  updateCount() {
    document.getElementById('count').innerHTML = this.sequence.length;
  }

  gameOver() {
    this.playSound(5);
    setTimeout(() => {
      if (this.strict) {
        this.resetGame();
      } else {
        this.showSequence();
      }
    }, 2000)
  }

  generateSequence() {
    let rndNmbr = Math.floor(Math.random() * 4) + 1
    this.sequence.push(rndNmbr);
    this.showSequence();
  }

  showSequence() {
    for (let i = 0; i < this.sequence.length; i++) {
      setTimeout(() => {
        let target = document.getElementById(this.sequence[i]);
        this.colorChange(target);
        this.playSound(this.sequence[i]);
      }, i * 1000);
    }
  }
}