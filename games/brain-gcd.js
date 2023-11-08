#!/usr/bin/env node

import {
  start, getUserAnswer,
  getRandomNumber, logCorrectAnswer, gameOver, questionsNumber,
} from '../src/index.js';

const getNumbersPair = () => {
  const divisors = [2, 3, 5];
  const leastDivisor = divisors[getRandomNumber(3)];
  let randomMultiplier = getRandomNumber(20);
  const firstNumber = leastDivisor * randomMultiplier;
  randomMultiplier = getRandomNumber(20);
  const secondNumber = leastDivisor * randomMultiplier;
  return [firstNumber, secondNumber];
};

const getGreatestDivisor = (firstNumber, secondNumber) => {
  let minNum = firstNumber;
  let maxNum = secondNumber;
  if (minNum > maxNum) {
    minNum = secondNumber;
    maxNum = firstNumber;
  }

  if (maxNum % minNum === 0) return minNum;
  let divisor = Math.trunc(minNum / 2);
  while (divisor > 1) {
    if (maxNum % divisor === 0 && minNum % divisor === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor;
};

const brainGcd = () => {
  const username = start();
  console.log('Find the greatest common divisor of given numbers.');
  // console.log();

  let attemp = 0;
  while (attemp < questionsNumber) {
    const [firstNumber, secondNumber] = getNumbersPair();
    const greatestDivisor = getGreatestDivisor(firstNumber, secondNumber);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = getUserAnswer('Your answer: ');

    if (greatestDivisor === parseInt(userAnswer, 10)) {
      logCorrectAnswer();
      attemp += 1;
    } else {
      gameOver(username, userAnswer, greatestDivisor);
      return false;
    }
  }

  console.log(`Congratulations, ${username}!`);
  return true;
};

export default brainGcd;
