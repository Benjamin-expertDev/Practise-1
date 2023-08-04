function findMaxNumber(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const numbers = [1, 7, 3, 9, 2, 5];
console.log(findMaxNumber(numbers)); 
