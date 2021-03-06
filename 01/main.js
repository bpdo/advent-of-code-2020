const text = await Deno.readTextFile('./input.txt');

// split new lines, parse ints and sort
const numbers = text
  .split(`\n`)
  .map(t => Number.parseInt(t))
  .sort((a, b) => a - b);

// search for numbers that sum to 2020
const answer1 = part1(numbers);
const answer2 = part2(numbers);

// print the answer
console.log(answer1 || 'unknown', answer2 || 'unknown');

function part1(numbers, total = 2020) {
  // loop through the numbers
  for (let value of numbers) {
    const x = total - value;

    // find the other value
    if (numbers.includes(x)) return x * value;
  }
}

function part2(numbers, total = 2020) {
  // loop through values
  for (let value1 of numbers) {
    // loop through reversed values
    for (let value2 of numbers.reverse()) {
      const x = total - value1 - value2;

      // find the third value
      if (numbers.includes(x)) return x * value1 * value2;
    }
  }
}
