/* Buckets
We have two buckets.
Bucket A contains 400.
Bucket B contains 200.
Swap these values in the different buckets.
*/

let bucketA = 400;
let bucketB = 200;
let bucketC = 0;

console.log("Currently bucket A has " + bucketA);
console.log("Currently bucket B has " + bucketB);

bucketC = bucketA;
bucketA = bucketB;
bucketB = bucketC;

console.log("Currently bucket A has " + bucketA);
console.log("Currently bucket B has " + bucketB);