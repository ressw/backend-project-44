#!/usr/bin/env node

import {
  start, getUserAnswer,
  getRandomNumber, gameOver, questionsNumber,
} from '../../src/index.js';

const getRandomSignsResult = (num1, num2, sign) => {
  if (sign === '+') return num1 + num2;
  if (sign === '-') return num1 - num2;
  if (sign === '*') return num1 * num2;
  return null;
};

const run = () => {
  const username = start();
  console.log('What is the result of the expression?');
  console.log();

  let attemp = 0;
  const signs = ['+', '-', '*'];
  while (attemp < questionsNumber) {
    const num1 = getRandomNumber(20);
    const num2 = getRandomNumber(10);
    const sign = signs[getRandomNumber(3)];
    console.log(`Question: ${num1} ${sign} ${num2}`);
    const correctAnswer = getRandomSignsResult(num1, num2, sign);
    const userAnswer = getUserAnswer('Your answer: ');

    if (correctAnswer === parseInt(userAnswer, 10)) {
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

run();
