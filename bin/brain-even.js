#!/usr/bin/env node

import getAnswer from '../src/cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 9);
const isEven = (num) => num % 2 === 0;

const gameOver = (username, answer, correctAnswer) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
};

const ask = (username) => {
  const number = getRandomNumber();
  const check = isEven(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const answer = getAnswer('Your answer: ');
  if (check === answer) {
    console.log('Correct!');
    console.log();
    return true;
  }
  gameOver(username, answer, check);

  return false;
};

const run = () => {
  console.log('Welcome to the Brain Games!');
  const username = getAnswer('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log();
  if (!ask(username)) return false;
  if (!ask(username)) return false;
  if (!ask(username)) return false;
  console.log(`Congratulations, ${username}!`);

  return true;
};

run();
