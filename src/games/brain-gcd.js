#!/usr/bin/env node

import { runGame, getRandomNumber } from '../index.js';

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
  while (divisor > 1) {
    if (maxNum % divisor === 0 && minNum % divisor === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor;
};

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const genNewQuestion = () => {
  const [firstNumber, secondNumber] = getNumbersPair();
  const correctAnswer = getGreatestDivisor(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, correctAnswer];
};

export default () => {
  runGame(gameQuestion, genNewQuestion);
};
