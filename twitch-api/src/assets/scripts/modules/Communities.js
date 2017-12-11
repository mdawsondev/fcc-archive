
import AJAX from './AJAX';
import $ from 'jquery'

function init() {
  var comms = 'streams?community_id=9d175334-ccdd-4da8-a3aa-d9631f95610e';
  new AJAX().pull(comms, function(response) {
    for (var i = 0; i < response.data.length; i++) {
      var image = response.data[i].thumbnail_url;
      var display_name = image.match(/_.+(?=-{)/)[0].replace('_user_', '');
      image = image.replace('{width}', '640').replace('{height}', '400');
      $('#streamers').append('<div class="streamers__card">' +
      '<div class="streamers__current"><a href="http://twitch.tv/' + display_name + '" target="_blank"><p><img src="' + image + '"></p>' +
      '<p>' + response.data[i].title + '</p></a></div>' +
      '<div class="streamers__data"><p class="streamer-id"><i class="fa fa-user" aria-hidden="true"></i> ' + display_name + '</p>' +
      '<p>' + response.data[i].viewer_count + ' <i class="fa fa-eye" aria-hidden="true"></i></p></div>' +
      '</div>');
    }
    console.log(response.data)
  });
}

init();