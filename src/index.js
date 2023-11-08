import readlineSync from 'readline-sync';

export const getUserAnswer = (question) => readlineSync.question(`${question}`);

export const questionsNumber = 3;

export const getRandomNumber = (max = 9) => Math.floor(Math.random() * max);

export const isEven = (num) => num % 2 === 0;

export const logCorrectAnswer = () => {
  console.log('Correct!');
  console.log();
};

export const gameOver = (username, answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

export const start = () => {
  console.log('Welcome to the Brain Games!');
  const username = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log();
  return username;
};
