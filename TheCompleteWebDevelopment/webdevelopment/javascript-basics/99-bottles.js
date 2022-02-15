/* 99 Bottles based on the counting song
We start with 99 bottles of beer and decrements after one is taken
*/

let count = 99;

function bottlesOfBeer() {
    for (count; count > 0; count--) {
        let newCount = count - 1;
        if (count > 1) {
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, " + newCount + " bottles of beer on the wall.")
        }
        else if (count === 1) {
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, no more bottles of beer on the wall.")
        }
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
}

bottlesOfBeer();