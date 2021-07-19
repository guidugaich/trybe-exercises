document.getElementById('header-container').style.backgroundColor = 'green';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'salmon';

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

for (let i of document.querySelectorAll(".emergency-tasks h3")) {
    i.style.backgroundColor = 'purple';
}

for (let i of document.querySelectorAll(".no-emergency-tasks h3")) {
    i.style.backgroundColor = 'black';
}

document.getElementsByTagName('footer')[0].style.backgroundColor = 'green'