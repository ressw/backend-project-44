#!/usr/bin/env node

import {
  start, getUserAnswer, getRandomNumber,
  checkCorrectAnswer, questionsNumber,
} from '../src/index.js';

const getNumbersPair = () => {
  const divisors = [2, 3, 5];
  const leastDivisor = divisors[getRandomNumber(0, 2)];
  let randomMultiplier = getRandomNumber(1, 20);
  const firstNumber = leastDivisor * randomMultiplier;
  randomMultiplier = getRandomNumber(1, 20);
  const secondNumber = leastDivisor * randomMultiplier;
  return [firstNumber, secondNumber];
};

const getGreatestDivisor = (firstNumber, secondNumber) => {
  if ((firstNumber === 0) || (secondNumber === 0)) return 1;
  let [minNum, maxNum] = [firstNumber, secondNumber];
  if (minNum > maxNum) {
    minNum = secondNumber;
    maxNum = firstNumber;
  }

  if (maxNum % minNum === 0) return minNum;
  let divisor = Math.trunc(minNum / 2);
  while (divisor > 2) {
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
  console.log();

  let attemp = 0;
  let check = 0;
  while (attemp < questionsNumber) {
    const [firstNumber, secondNumber] = getNumbersPair();
    const correctAnswer = getGreatestDivisor(firstNumber, secondNumber);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = getUserAnswer('Your answer: ');
    check = checkCorrectAnswer(username, correctAnswer, userAnswer);
    if (check) {
      attemp += 1;
    } else {
      return false;
    }
  }
  console.log(`Congratulations, ${username}!`);
  return true;
};

export default brainGcd;
