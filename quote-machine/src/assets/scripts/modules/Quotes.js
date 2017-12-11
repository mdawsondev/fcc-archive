import LoadJSON from './JSON';

function init() {
  new LoadJSON().pull(function (response) {
    function loadNew() {
      var a = Math.floor(Math.random() * response.collection.length),
        b = Math.floor(Math.random() * response.collection[a].character.length),
        c = Math.floor(Math.random() * response.collection[a].character[b].quotes.length);
      document.getElementById('quote').innerHTML = response.collection[a].character[b].quotes[c];
      document.getElementById('char-image').src = response.collection[a].character[b].picture;
      document.getElementById('char-name').innerHTML = response.collection[a].character[b].name;
      document.getElementById('show').innerHTML = response.collection[a].show;
      document.getElementById('twitter').href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + response.collection[a].character[b].quotes[c] + '" - ' + response.collection[a].show;
    }
    loadNew();    
    document.getElementById('next-quote').onclick = function () {
      loadNew()
    };
  });
}

init();



