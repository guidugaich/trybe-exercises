let n = 5;

// definir altura da piramide em linhas
let pyramidHeight = Math.ceil(n/2);

let asteriscs = 1

for (index = 0; index < pyramidHeight; index += 1) {
    let string = '';
    let spacesToTheLeft = (n - asteriscs) / 2; 
    for (let j = 0; j < (spacesToTheLeft + asteriscs); j += 1) {
        if (j <  spacesToTheLeft) {
            string += ' ';
        } else {
            string += '*';
        }
    }
    console.log(string);
    asteriscs += 2;  
}