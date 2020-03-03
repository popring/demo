/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // * 根据 Set 特性, 自动过滤重复数据
  return [...new Set(nums)].length !== nums.length;
};
