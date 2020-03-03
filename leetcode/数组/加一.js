/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // * 将数组的最后一个元素值 +1, 满10进1
  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] >= 10) {
      digits[i] = 0
      continue
    } else {
      // 加一完成
      return digits
    }
  }
  // 加一未完成
  digits.unshift(1)
  return digits
}
