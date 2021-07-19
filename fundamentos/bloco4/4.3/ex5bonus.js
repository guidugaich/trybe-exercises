let n = 35;

let pyramidHeight = Math.ceil(n/2);
let pyramidMargin = Math.floor(n/2);

for (let rowIndex = 0; rowIndex < pyramidHeight; rowIndex += 1) {
    let string = '';
    for (let stringIndex = 0; stringIndex < n; stringIndex += 1) {
        if (stringIndex == (pyramidMargin) || stringIndex == (n - pyramidMargin - 1)) {
            string += '*';
        } else if (rowIndex == pyramidHeight - 1) {
            string += '*';
        } else {
            string += ' ';
        }
    }
    console.log(string);
    pyramidMargin -= 1;
}