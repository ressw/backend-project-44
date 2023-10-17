import readlineSync from 'readline-sync';

const getName = () => {
  const question = 'May I have your name?';
  return readlineSync.question(`${question}: `);
};

export default getName;
