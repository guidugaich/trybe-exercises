const gabarito = (respostaCerta) => respostaUsuario = (respostaUsuario) => {
  return respostaCerta.toLowerCase() === respostaUsuario.toLowerCase();
}
  

const respUser = gabarito('AAA');
console.log(respUser('aaa'));