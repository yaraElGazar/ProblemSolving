// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
// and an integer n, return true if n new flowers can be planted in the flowerbed without violating the
// no-adjacent-flowers rule and false otherwise.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // Find available zeros (a zero that has zeros before and after it)
  let availableZeros = 0;

  // Check if the array is only one item and it is zero
  if (flowerbed[0] === 0 && flowerbed.length === 1) {
    availableZeros++;
  }

  // Check the beginning of the array
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    flowerbed[0] = 1;
    availableZeros++;
  }

  // Check the end of the array
  if (
    flowerbed[flowerbed.length - 1] === 0 &&
    flowerbed[flowerbed.length - 2] === 0
  ) {
    flowerbed[flowerbed.length - 1] = 1;
    availableZeros++;
  }

  // Check the middle of the array
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      availableZeros++;
    }
  }
  console.log(availableZeros);
  return availableZeros >= n;
};
