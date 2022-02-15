/* Love calculator! Find your perfect match!
This function should take to names and then return a random number
The random number should result in a love score which then has a message associated with it.
*/

let femaleName = "Jessica";
let maleName = "Simon";

function loveCalculator(name1, name2) {
    let loveScore = Math.random() * 100
    loveScore = Math.round(loveScore);

    if (loveScore > 70) {
        console.log("Your love score is " + loveScore + ". You love Kanye as much as Kanye loves Kanye");
    } if (loveScore > 30 && loveScore < 69) {
        console.log("Your love score is " + loveScore + ". You love each other as much as people love Marmite");
    } else if(loveScore < 30) {
        console.log("Your love score is " + loveScore + ". I think its time to find other people");
    }
    return loveScore;
}

console.log(loveCalculator(femaleName, maleName));