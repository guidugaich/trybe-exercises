const apiurl = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const optionsObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(apiurl, optionsObject);
};

window.onload = () => fetchJoke();