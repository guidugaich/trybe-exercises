let n = 35;

let pyramidHeight = Math.ceil(n/2);
let pyramidMargin = Math.floor(n/2);

for (index = 0; index < pyramidHeight; index += 1) {
    let string = '';
    for (let j = 0; j < n; j += 1) {
        if (j == (pyramidMargin) || j == (n - pyramidMargin - 1)) {
            string += '*';
        } else if (index == pyramidHeight - 1) {
            string += '*';
        } else {
            string += ' ';
        }
    }
    console.log(string);
    pyramidMargin -= 1;
}