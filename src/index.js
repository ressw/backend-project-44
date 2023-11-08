import readlineSync from 'readline-sync';

export const getUserAnswer = (question) => readlineSync.question(`${question}`);

export const questionsNumber = 3;

export function getRandomNumber(min = 1, max = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const isEven = (num) => num % 2 === 0;

export const gameOver = (username, correctAnswer, userAnswer) => {
  console.log();
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

export const checkCorrectAnswer = (username, correctAnswer, userAnswer) => {
  let uAnswer = userAnswer;
  if (typeof correctAnswer === 'number') {
    uAnswer = parseInt(userAnswer, 10);
  }
  if (correctAnswer === uAnswer) {
    console.log('Correct!');
    console.log();
    return true;
  }
  gameOver(username, correctAnswer, uAnswer);
  return false;
};

export const start = () => {
  console.log('Welcome to the Brain Games!');
  const username = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log();
  return username;
};
