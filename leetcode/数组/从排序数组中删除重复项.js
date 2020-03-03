/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // * 通过对比后一个元素与前一个元素是否相同, 实现功能
  let ei = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[ei]) {
      continue
    } else {
      ei++
      nums[ei] = nums[i]
    }
  }
  return ei + 1
}
