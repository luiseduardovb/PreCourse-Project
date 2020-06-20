/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */

// dont know how to add numbers[i] to the oddsNum
function sumOdds(numbers) {
  let oddNums = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddNums += numbers[i];
    }
  }

  return oddNums;
}

/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: Use string methods to make it case-insensitive
 */

// dont know how to add to the count
function characterCount(string, c) {
  string = string.toLowerCase();
  let strCount = 0;
  let i = 0;
  while (i < string.length) {
    if (string[i] === c) {
      strCount = strCount + 1;
    }
    i++;
  }
  return strCount;
}

/**
 * differences(numbers):
 * - receives an array of numbers
 * - returns an array that has the difference in the values of the numbers array.
 * - see example below for clarification.
 *
 * e.g.
 * differences([1, 3, 7, 9, 12]) -> [2, 4, 2, 3]
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 *
 * differences([11, 35, 52, 14, 56]) -> [24,  17, -38,  42]
 */
function differences(numbers) {
  let integerDiff = [];
  for (let i = 1; i < numbers.length; i++) {
    integerDiff.push(numbers[i] - numbers[i - 1]);
  }
  return integerDiff;
}

/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 *
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(numbers) {
  let largestIncr = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] - numbers[i] > largestIncr) {
      largestIncr = numbers[i + 1] - numbers[i];
    }
  }

  return largestIncr;
}

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(numbers, x) {
  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] === x) {
      return numbers.slice(i + 1, numbers.length);
    }
}
/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  firstName = firstName.toUpperCase();
  lastName = lastName.toUpperCase();
  let initialsName = firstName.slice(0, 1) + lastName.slice(0, 1);

  return initialsName;
}
/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
function isUpperCase(string) {
  let outCome = "";
  for (let i = 0; i < string.length; i++) {
    if (string === string.toUpperCase()) {
      outCome = true;
    } else {
      outCome = false;
    }
  }
  return outCome;
}

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */
function elementInArray(numbers, x) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === x) {
      return true;
    }
  }
  return false;
}

/**
 * reverseString(string):
 * - receives a string
 * - returns the reverse of the string
 *
 * e.g.
 * reverseString("string") -> "gnirts"
 * reverseString("CODED") -> "DEDOC"
 *
 */
function reverseString(string) {
  let backToFirst = "";
  for (let i = string.length - 1; i >= 0; i--) {
    backToFirst += string[i];
  }
  return backToFirst;
}

console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));
console.log(characterCount("Character Count is clever", "c"));
console.log(differences([11, 35, 52, 14, 56]));
console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));
console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(abbreviate("miss", "Stephane"));
console.log(isUpperCase("JCREW"));
console.log(elementInArray([5, 6, 7], 8));
console.log(reverseString("CODED"));

module.exports = {
  sumOdds,
  characterCount,
  differences,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
  reverseString,
};
