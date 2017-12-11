import $ from 'jquery'
import AJAX from './AJAX';

var props = [['users', 'login'], ['streams', 'user_login']],
  users = ['freecodecamp', 'twitchdev', 'dansgaming'],
  log = {
    users: 'users?',
    streams: 'streams?'
  },
  ajax = new AJAX();


for (let i = 0; i < props.length; i++) {
  let cat = props[i][0],
    type = props[i][1];
  for (let j = 0; j < users.length; j++) {
    log[cat] += type + '=' + users[j] + '&';
  }
}

function init() {
  for (let archive in log) {
    ajax.pull(log[archive], function (response) {
      for (let item in response.data) {
        let the = response.data[item];
        if (the.hasOwnProperty('display_name')) {
          $('#sponsored__users').append('<div class="sponsored__streamer" id="' + the.id + '"><a href="http://twitch.tv/' + the.display_name + '" target="blank">' + the.display_name + ' - <span class="offline">Offline</span></a></div>')
        }
        if (the.hasOwnProperty('user_id')) {
          setTimeout(function() {
            $('#' + the.user_id).find('.offline').html('Live - <span class="description">' + the.title + '</span>');
            $('#' + the.user_id).addClass('live').prepend('<span class="live__bullet">&bull;</span>');
          }, 150);
        }
      }
    });
  }
}

init();
