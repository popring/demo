/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // * 第一种, 将每次推出的数 再次添加到数组首位
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
}

var rotate = function(nums, k) {
  // * 第二种, 利用 splice 特性, 最后一个参数为替换删除的元素
  nums.splice(0, 0, ...nums.splice(nums.length - k))
}
