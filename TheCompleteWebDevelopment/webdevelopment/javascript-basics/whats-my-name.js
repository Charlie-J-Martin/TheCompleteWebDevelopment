/* What's my namee
Whenever a user is asked for their name the output should always be capitalised first character and lowercase for the remainder
*/

// let userName = "charlie";
// let userName = "CHARLIE";
let userName = "chaRLIE";

function formatName(userName) {
  console.log(userName);
  let firstCharacter = userName.slice(0, 1);
  let upperCaseFirstCharacter = firstCharacter.toUpperCase();
  let remainingLetters = userName.slice(1, userName.length);
  let lowerCaseRemainingLetters = remainingLetters.toLowerCase();
  console.log(upperCaseFirstCharacter + lowerCaseRemainingLetters);
  return upperCaseFirstCharacter + lowerCaseRemainingLetters;
}

console.log(formatName(userName));
