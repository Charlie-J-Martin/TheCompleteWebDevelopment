/* How old is my dog in human years?
This function should take in a dogs age and return the equivalent human age.
*/

let dogAge = 1;

function dogToHumanAge(age) {
    const humanAge = (age - 2) * 4 + 21;
    return humanAge;
}

console.log(dogToHumanAge(dogAge));