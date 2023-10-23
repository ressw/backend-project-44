#!/usr/bin/env node

import getAnswer from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const username = getAnswer();
console.log(`Hello, ${username}!`);
