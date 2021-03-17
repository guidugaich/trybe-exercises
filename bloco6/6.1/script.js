const states = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' },
];

const submitBtn = document.getElementById('submit-btn');
const formElement = document.getElementsByTagName('form')[0];
const userInputs = document.querySelectorAll('input');

const stateDropdown = document.getElementById('state');
for (let stateObject of states) {
  let stateOption = document.createElement('option');
  let stateID = Object.keys(stateObject)
  stateOption.innerText = stateObject[stateID];
  stateOption.value = stateID; 
  stateDropdown.appendChild(stateOption);
}

function checkDateValues(event) {
  event.preventDefault();

  const typedDate = document.getElementById('data-inicio').value;
  let dia = parseInt(typedDate.slice(0,2));
  let mes = parseInt(typedDate.slice(3,5));
  let ano = parseInt(typedDate.slice(6,10));

  if(dia <= 0 || dia > 31 || mes <= 0 || mes > 12 || ano < 0) {
    alert('Data inválida');
  } else {
    let resume = document.getElementById('resume');
    for (let el of userInputs) {
      let newEntry = document.createElement('div');
      if (el.name === 'residence-type' && el.checked) {
        let text = document.querySelector('input[name="residence-type"]:checked').parentElement.innerText;
        let fieldName = 'Tipo de residência';
        newEntry.innerText = fieldName + ": " + text;
      } else {
        let fieldName = el.parentElement.innerText;
        newEntry.innerText = fieldName + ": " + el.value;
      }
      resume.appendChild(newEntry);
    }
  }
}

submitBtn.addEventListener('click', checkDateValues);