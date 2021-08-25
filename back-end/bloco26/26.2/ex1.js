function ex1(p1, p2, p3) {
  return new Promise((resolve, reject) => {
    if (
      typeof p1 !== 'number' ||
      typeof p2 !== 'number' ||
      typeof p3 !== 'number'  ) {
      
      return reject(Error('we have a non-number among us'))
    }

    const res = p1+p2+p3;
    if (res < 1.5) {
      return reject(Error('too low, bro'))
    }
    resolve(res)
  });
}

async function callFunc() {
  try {
    const r = await ex1(Math.random(), Math.random(), Math.random())
    console.log(r)
  } catch(e) {
    console.log(e)
  }
}

callFunc();

// ex1(
//   Math.random(),
//   Math.random(),
//   Math.random())
//   .then(r => console.log(r))
//   .catch(err => console.log(err));