import $ from 'jquery'

class Timer {
  constructor() {
    this.newCount = true;
    this.break = true;
    this.breakTime = null;
    this.longBreak = null;
    this.paused = false;
    this.round = 0;
    this.roundSet = 4;
    this.secsTot = null;
    this.start = true;
    this.startTime = null;
  }

  animate(percent) {
    $('.bar').width(percent);
  }

  clock(time) {
    let minutes = Math.floor(time / 60),
      seconds = time - minutes * 60;
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    $('#clock').text(minutes + ':' + seconds);
  }

  count(inputTime, shortBreak = 5, longBreak = 25) {
    if (this.paused) {
      setTimeout(() => {
        this.count(inputTime)
      }, 1000);
    } else {
      if (this.start) {
        this.color(true);
        this.startTime = inputTime;
        this.start = false;
        this.breakTime = shortBreak;
        this.longBreak = longBreak;
      }
      if (this.newCount) {
        inputTime *= 60;
        this.secsTot = inputTime;
        this.newCount = false;
      }
      setTimeout(() => {
        if (inputTime != 0) {
          this.animate(100 - (inputTime / this.secsTot * 100).toFixed(1) + '%');
          this.clock(inputTime)
          inputTime--;
          this.count(inputTime)
        } else {
          this.color(false);
          this.animate('100%');
          this.clock(0);
          this.newCount = true;
          if (this.round < this.roundSet) {
            if (this.break) {
              this.break = false;
              this.count(this.breakTime)
            } else {
              this.break = true;
              this.round++;
              this.count(this.startTime);
            }
          } else {
            this.count(this.longBreak);
            $('.motivation').text("Time for a long break!");
            let audio = new Audio('/assets/audio/long-break.wav');
            audio.play();
          }
        }
      }, 1000)
    }
  };

  color(first) {
    var changes = ['background', 'bar', 'bar__container', 'clock', 'emoticon__face', 'header', 'motivation'];
    for (let i = 0; i < changes.length; i++) {
      if (first) {
        $('.' + changes[i]).toggleClass(changes[i] + '--work');
      } else {
        $('.' + changes[i]).toggleClass(changes[i] + '--work');
        $('.' + changes[i]).toggleClass(changes[i] + '--break');
      }
    }
    if (!first && this.break) {
      let audio = new Audio('/assets/audio/break.flac');
      audio.play();
      $('.motivation').text("Take a break!");
    } else {
      if (!first) {
        let audio = new Audio('/assets/audio/work.wav');
        audio.play();
      }
      $('.motivation').text('Get to work, slave!')
    }
  }
}

export default Timer;