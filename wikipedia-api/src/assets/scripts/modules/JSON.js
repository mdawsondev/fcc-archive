class LoadJSON {
  constructor() {
    this.pull();
  }

  pull(query, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=' + query, true);
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200 && callback) {
          callback(JSON.parse(this.responseText));
        }
    };
    xhr.send(null);
  }
}

export default LoadJSON;