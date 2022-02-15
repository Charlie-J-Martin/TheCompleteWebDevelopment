/* Guest List checker
Given an array of guest list check wether the guest entering the party is on the list.
*/

const guestList = ['Sam', 'Jeff', 'Sally', 'Jessica'];

function guestListChecker(name) {
  if (guestList.includes(name)) {
    return 'Welcome';
  } else {
    return "You're not welcome here";
  }
}

console.log(guestListChecker("Sam"));
console.log(guestListChecker("Simon"));
console.log(guestListChecker("Jeff"));
console.log(guestListChecker("Maddy"));
console.log(guestListChecker("Jack"));
console.log(guestListChecker("Jessica"));