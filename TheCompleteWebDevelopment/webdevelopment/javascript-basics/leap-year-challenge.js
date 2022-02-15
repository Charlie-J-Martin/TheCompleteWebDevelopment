/* Leap Year Challenge
Given any particular year we want to workout if it is a leap year. This can be done using the following rules.
1. A year is a leap year if it is evenly divisible by 4;
2. Except if that year is also evenly divisible by 100;
3. Unless that year is also evenly divisible by 400;
*/

function isLeap(year) {
  if (year % 4 !== 0) {
    return 'Not Leap Year';
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return 'Leap Year.';
  } else if ((year % 4 === 0) & (year % 100 === 0) && year % 400 !== 0) {
    return 'Not Leap Year.';
  } else if ((year % 4 === 0) & (year % 100 === 0) && year % 400 === 0) {
    return 'Leap Year.';
  }
}

console.log(isLeap(2400));
console.log(isLeap(1948));
console.log(isLeap(1989));

function angelaIsLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return 'Leap year.';
      } else {
        return 'Not leap year';
      }
    } else {
      return 'Leap year';
    }
  } else {
    return 'Not leap year';
  }
}

console.log(angelaIsLeap(2400));
console.log(angelaIsLeap(1948));
console.log(angelaIsLeap(1989));