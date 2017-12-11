import $ from 'jquery';
import Timer from './Timer'

var timer = new Timer();

$('#start').click(function() {
  setTimeout(() => {
    $('.settings__times').css('display', 'none');
    $('.settings').toggleClass('settings--mini');
    $('.header').toggleClass('header--no-settings')
    $(this).toggleClass('btn--hide');
    $('#pause').toggleClass('btn--hide');
    $('#stop').toggleClass('btn--hide');
    timer.count($('#workmins').text(), $('#shortbreak').text(), $('#longbreak').text());
  }, 200)
  
})

$('#pause').click(function() {
  if (!timer.paused) {
    $('#pause').text('Resume');
    timer.paused = true;
  } else {
    $('#pause').text('Pause');
    timer.paused = false;
  }
})

/* Add real code in the future, lazy! */
$('#stop').click(function() {
  location.reload();
});

$('.changetime').click(function () {
  let temp = $(this).parent().siblings('.settings__minutes').html();
  if ($(this).hasClass('arrowup') && temp < 60) {
    $(this).parent().siblings('.settings__minutes').html(Number(temp) + 1)
  }
  if ($(this).hasClass('arrowdown') && temp > 0) {
    $(this).parent().siblings('.settings__minutes').html(Number(temp) - 1)
  }
})

$('#default').click(function() {
  
  $('#workmins').text('25');
  $('#shortbreak').text('5');
  $('#longbreak').text('25');
})