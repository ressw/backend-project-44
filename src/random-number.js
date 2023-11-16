export default function getRandomNumber(min = 1, max = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
