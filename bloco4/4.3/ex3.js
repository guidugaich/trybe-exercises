let n = 5;

for (let i = 0; i < n; i += 1) {
    let string = ''
    for (let j = 0; j < n; j += 1) {
        if (j < (n - i - 1)) {
            string += ' ';
        } else {
            string += '*';
        }
    }
    console.log(string);
}