function createDaysOfTheWeek() {
const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const weekDaysList = document.querySelector('.week-days');

for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
};
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];

function addCalendarDays() {
    for (let day of dezDaysList) {
        let dayElement = document.createElement('li');
        dayElement.className = 'day';
        dayElement.innerText = day;

        if (holidays.includes(day)) {
            dayElement.classList.add('holiday');
        }

        if (fridays.includes(day)) {
            dayElement.classList.add('friday');
        }
        
        document.getElementById('days').appendChild(dayElement);
    }
}
addCalendarDays();

// Exercicio 2
function holidayBtnGenerator(btnString) {
    let btn = document.createElement('button');
    btn.id = 'btn-holiday';
    btn.innerText = btnString;
    document.querySelector('.buttons-container').appendChild(btn);
}

holidayBtnGenerator("Feriados");

// Exercicio 3
function addClickEventToHolidayBtn() {
    const btn = document.getElementById('btn-holiday');
    btn.addEventListener('click', function () {
        for (let i of document.querySelectorAll('.holiday')) {
            let currentColor = i.style.backgroundColor;
            if (currentColor !== 'lightgreen') {
                i.style.backgroundColor = 'lightgreen';
            } else {
            i.style.backgroundColor = 'rgb(238, 238, 238)';
            }
        }
    });
}

addClickEventToHolidayBtn();

//Exercicio 4
function fridayBtnGenerator(btnString) {
    let btn = document.createElement('button');
    btn.id = 'btn-friday';
    btn.innerText = btnString;
    document.querySelector('.buttons-container').appendChild(btn);
}

fridayBtnGenerator("Sexta-Feira");

//  Exercicio 5
function addClickEventToFridayBtn() {
    const btn = document.getElementById('btn-friday');
    btn.addEventListener('click', function () {
        const fridayElements = document.querySelectorAll('.friday');
        for (let index in fridayElements) {
            if(fridayElements[index].innerText === 'Sextou!') {
                fridayElements[index].innerText = fridays[index];
            } else {
                fridayElements[index].innerText = 'Sextou!';
            };
        }
    });
}

addClickEventToFridayBtn();

// Exercicio 6
function enlarge(evt) {
    evt.target.style.fontSize = '1.8em';
    evt.target.style.fontWeigth = '1.8em';
}

function backToNormal(evt) {
    evt.target.style.fontSize = '1em';
    evt.target.style.fontWeight = '1em'
}

let ulDays = document.getElementById('days').childNodes;
  
  
for (let liElement of ulDays) {
    liElement.addEventListener('mouseover', enlarge, false);
    liElement.addEventListener('mouseleave', backToNormal, false);
}

// Exercicio 7
function addTask(taskString) {
    let task = document.createElement('span');
    task.innerText = taskString;
    document.getElementsByClassName('my-tasks')[0].appendChild(task);
}

addTask('Cozinhar');

// Exercicio 8
function addTaskSelector (colorString) {
    let newDiv = document.createElement('div');
    newDiv.className = 'task';
    newDiv.style.backgroundColor = colorString;
    document.getElementsByClassName('my-tasks')[0].appendChild(newDiv);
}

addTaskSelector('green');

// Exercicio 9
function addTaskClassOnClick() {
    let taskDiv = document.querySelector('.task');
    taskDiv.addEventListener('click', function () {
        if (taskDiv.className === 'task') {
            taskDiv.classList.add('selected');
        } else {
            taskDiv.classList.remove('selected');
        }
    }); 
}

addTaskClassOnClick();
