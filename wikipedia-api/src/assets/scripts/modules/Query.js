import LoadJSON from './JSON';

function init() {
  function search(query) {
    new LoadJSON().pull(encodeURIComponent(query), function (response) {
      document.getElementById('results').style.opacity = 0;
      document.getElementById('header').classList.remove('header--center')
      setTimeout(function() {
      document.getElementById('results').innerHTML = '';
      for (var result in response.query.search) {
        var titleOut = document.createElement('h1'),
            linkOut = document.createElement('a'),
            snippetOut = document.createElement('p'),
            wrapperOut = document.createElement('div');
        titleOut.classList.add("card__title");
        snippetOut.classList.add("card__description");
        wrapperOut.classList.add("results__card");
        linkOut.innerHTML = response.query.search[result].title;
        linkOut.href = 'https://en.wikipedia.org/wiki/' + response.query.search[result].title;
        snippetOut.innerHTML = response.query.search[result].snippet;
        titleOut.appendChild(linkOut);
        wrapperOut.appendChild(titleOut);
        wrapperOut.appendChild(snippetOut);
        document.getElementById('results').appendChild(wrapperOut);
        document.getElementById('results').style.opacity = 1;
      }
    }, 200)
    });
  }
  document.getElementById('btn-search').onclick = function() {
    search(document.getElementById('input-search').value);
  };
}

init();