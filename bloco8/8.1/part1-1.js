const generateObject = (HiredPersonName) => {
  const employee = {
    nomeCompleto: HiredPersonName,
    email: `${HiredPersonName.toLowerCase().split(' ').join('')}@trybe.com`
  }
  return employee;
}

const newEmployees = (fun) => {
  const employees = {
    id1: fun('Pedro Guerra'),
    id2: fun('Luiza Drumond'),
    id3: fun('Carla Paiva')
  }
  return employees;
};

console.log(newEmployees(generateObject));