// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // Check if they are dublicates
  if (str1 + str2 === str2 + str1) {
    // Find the greatest common divisor
    function gcd(x, y) {
      let divisor;
      for (let i = 0; i <= x && i <= y; i++) {
        if (x % i === 0 && y % i === 0) {
          divisor = i;
        }
      }
      return divisor;
    }

    let div = gcd(str1.length, str2.length);
    return str1.slice(0, div);
  } else {
    return "";
  }
};
