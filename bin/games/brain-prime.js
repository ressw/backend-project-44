#!/usr/bin/env node

import {
  start, getUserAnswer,
  getRandomNumber, gameOver, questionsNumber,
} from '../../src/index.js';

const isPrimeNumber = (num) => {
  if (num < 2) return false;
  let div = 2;
  const maxDiv = Math.trunc(num / 2);
  while (div <= maxDiv) {
    if (num % div === 0) {
      return false;
    }
    div += 1;
  }

  return true;
};

const brainPrime = () => {
  const username = start();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log();

  let attemp = 0;
  while (attemp < questionsNumber) {
    const randomNum = getRandomNumber(350);
    const correctAnswer = isPrimeNumber(randomNum) ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`);
    const userAnswer = getUserAnswer('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      console.log();
      attemp += 1;
    } else {
      gameOver(username, userAnswer, correctAnswer);
      return false;
    }
  }

  console.log(`Congratulations, ${username}!`);
  return true;
};

brainPrime();
