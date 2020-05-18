const random = Math.random();

exports.getRandomNumber = (max = 1) => {
  return Math.floor(random * max) + 1;
};
