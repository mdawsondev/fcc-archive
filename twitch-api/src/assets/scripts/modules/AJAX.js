import $ from 'jquery';

class AJAX {
  constructor() {
  }

  pull(query, callback) {
    $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/helix/' + query,
      headers: {
        'Client-ID': 'gjzz6g4zgd85uauokhyo6y6iv5v6jt'
      },
      success: function (data) {
        callback(data);
      }
    });
  }

}

export default AJAX;