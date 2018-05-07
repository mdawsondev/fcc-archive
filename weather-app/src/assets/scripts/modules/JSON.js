class LoadJSON {
  constructor() {
    this.pull();
  }

  pull(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.wunderground.com/api/14d28d8640f5e709/geolookup/conditions/astronomy/forecast10day/q/autoip.json', true);
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200 && callback) {
          callback(JSON.parse(this.responseText));
        }
    };
    xhr.send(null);
  }
}

export default LoadJSON;