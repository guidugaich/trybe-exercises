let salarioBruto = 3000;
let salarioBaseIR; //essa variavel vai receber o valor do salario base para o IR, depois de descontado o inss
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    salarioBaseIR = salarioBruto*(1-0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBaseIR = salarioBruto*(1-0.09);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBaseIR = salarioBruto*(1-0.11);
} else if (salarioBruto >= 5189.82) {
    salarioBaseIR = salarioBruto - 570.88;
}


console.log('Salario base para calculo do IR: ' + salarioBaseIR);
//Calculo do IR

if (salarioBaseIR <= 1903.98) {
    salarioLiquido = salarioBaseIR;
} else if (salarioBaseIR >= 1903.99 && salarioBaseIR <= 2826.65) {
    salarioLiquido = salarioBaseIR*(1-0.075) + 142.80;
} else if (salarioBaseIR >= 2826.66 && salarioBaseIR <= 3751.05) {
    salarioLiquido = salarioBaseIR*(1-0.15) + 354.80;
} else if (salarioBaseIR >= 3751.06 && salarioBaseIR <= 4664.68) {
    salarioLiquido = salarioBaseIR*(1-0.225) + 636.13;
} else if (salarioBaseIR >= 4664.69) {
    salarioLiquido = salarioBaseIR*(1-0.275) + 869.36;
}

console.log(salarioLiquido);