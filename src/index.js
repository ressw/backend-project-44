import readlineSync from 'readline-sync';

export const getUserAnswer = (question) => readlineSync.question(`${question}`);

export const questionsNumber = 3;

export const getRandomNumber = (max = 9) => Math.floor(Math.random() * max);

export const isEven = (num) => num % 2 === 0;

export const gameOver = (username, correctAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

export const checkCorrectAnswer = (username, correctAnswer, userAnswer) => {
  let answer = userAnswer;
  if (typeof correctAnswer === 'number') {
    answer = parseInt(userAnswer, 10);
  }
  if (correctAnswer === answer) {
    console.log('Correct!');
    console.log();
    return true;
  }
  gameOver(username, answer, userAnswer);
  return false;
};

export const start = () => {
  console.log('Welcome to the Brain Games!');
  const username = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log();
  return username;
};
