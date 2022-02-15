/* Fizz Buzz 
1. Go through numbers 1 to 100
2. Everytime a multiple of 3 occurs say Fizz
3. Everytime a multiple of 5 occurs say Buzz
4. Everytime a multiple of 3 & 5 occurs say FizzBuzz
*/

let output = [];

function fizzBuzz() {
  const maxCount = 100;

  for (let i = 1; i < maxCount; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        output.push('FizzBuzz');
      }
      output.push('Fizz');
    }
    if (i % 5 === 0) {
      output.push('Buzz');
    }
    output.push(i);
  }
  return output;
}

console.log(fizzBuzz());
// console.log(output);
