let custo = 3;
let valorVenda = 5;
let quantidade = 1000;

let custoComImposto = custo*1.2;

if (custo < 0 || valorVenda < 0) {
    console.log('Erro!');
    return false;
}

console.log(quantidade*(valorVenda - custoComImposto));