/* Who's buying lunch
A function that will pick a random name from a list. The person selected will have to pay for everybody's lunch.
*/

let names = ['Charlie', 'Jessica', 'Mandy', 'Jeff', 'Simon'];

function whosPaying(names) {
  const numberOfPeople = names.length;
  const randomNumber = Math.floor(Math.random() * numberOfPeople);
  const randomName = names[randomNumber];
  return randomName + ' is going to buy lunch today!';
}

console.log(whosPaying(names));
