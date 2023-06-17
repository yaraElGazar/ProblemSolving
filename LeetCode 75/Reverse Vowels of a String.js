// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowelsObj = {};
  // Strings in JS is immutable so we will deal with arrays
  let sArray = s.split("");

  // Save the vowels in an object
  for (let char of "aeiouAEIOU") {
    vowelsObj[char] = true;
  }

  // 2 pointers
  let left = 0;
  let right = s.length - 1;

  // Loop on the array
  while (left < right) {
    // if the char (left pointer) is not a vowel keep moving
    while (left < right && !(sArray[left] in vowelsObj)) {
      left++;
    }

    // if the char (right pointer) is not a vowel keep moving
    while (left < right && !(sArray[right] in vowelsObj)) {
      right--;
    }

    // now both left and right are on vowels so we should swap them
    swap(sArray, left, right);
    left++;
    right--;
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return sArray.join("");
};
