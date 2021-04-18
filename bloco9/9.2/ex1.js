const apiurl = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const optionsObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(apiurl, optionsObject)
    .then(response => response.json())
    .then(data => {
      const jokeText = document.createElement('p');
      jokeText.innerText = data.joke;
      document.getElementById('jokeContainer').appendChild(jokeText);
    })
};

window.onload = () => fetchJoke();