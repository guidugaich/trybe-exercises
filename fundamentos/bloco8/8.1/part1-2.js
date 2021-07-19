const check = (sorteado, correto) => sorteado === correto;

const sorteio = (numeroApostado, func) => {
  const sorteado = Math.ceil(Math.random()*5);
  console.log(sorteado);
  return func(sorteado, numeroApostado)
};

console.log(sorteio(5, check));