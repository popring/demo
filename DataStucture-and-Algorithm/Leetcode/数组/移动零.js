/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 两个索引, 1快1慢
  for (let i1 = 0, i2 = 0; i1 < nums.length; i1++) {
    if (nums[i1] !== 0) {
      exchange(nums, i1, i2)
      i2++
    } else {
      continue
    }
  }
}

/**
 * 根据提供的索引, 交换数组中两个数
 * @param {number[]} nums 数组
 * @param {number} a 索引a
 * @param {number} b 索引b
 * @returns {void} 数组为引用类型, 没有返回值
 */
function exchange(nums, a, b) {
  let tmp = nums[a]
  nums[a] = nums[b]
  nums[b] = tmp
}
