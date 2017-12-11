class LoadJSON {
  constructor() {
    this.pull();
  }

  pull(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/mdawsondev/mini-scripts/master/json/quotes.json', true);
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200 && callback) {
          callback(JSON.parse(this.responseText));
        }
    };
    xhr.send(null);
  }
}

export default LoadJSON;