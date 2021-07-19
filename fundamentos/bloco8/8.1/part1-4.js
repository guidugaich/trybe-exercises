const checkAnswer = (correctAnswer, studentAnswer) => {
  if (studentAnswer === 'N.A') return 0;
  return correctAnswer === studentAnswer ? 1 : -0.5;
}

const processAnswers = (correctAnswers, studentAnswers, checkFunc) => {
  let score = 0;
  for (let index = 0; index < correctAnswers.length; index += 1) {
    score += checkFunc(correctAnswers[index], studentAnswers[index]);
    console.log(`score: ${score}`);
  }
  return score;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(processAnswers(rightAnswers, studentAnswers, checkAnswer));
