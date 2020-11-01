/**
 * 二分查找循环版
 *
 * 如果目标值等于中间元素，则找到目标值。
 * 如果目标值较小，继续在左侧搜索。
 * 如果目标值较大，则继续在右侧搜索。
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
Array.prototype.binarySearchLoop = function (target) {
  // 空数组查找，返回-1
  if (this.length === 0) return -1
  // 首先进行排序
  this.sort((a, b) => a - b)
  // 左指针
  let left = 0
  // 右指针
  let right = this.length - 1
  // 当前指针
  let pivot
  while (left <= right) {
    // 原本是这样，pivot = Math.floor((left + right) / 2)，leetcode官方解释，阻止溢出（Prevent (left + right) overflow）
    pivot = left + Math.floor((right - left) / 2)
    if (this[pivot] === target) {
      return pivot
    } else if (this[pivot] > target) {
      right = pivot - 1
    } else if (this[pivot] < target) {
      left = pivot + 1
    }
  }
  return -1
}

var arr = [1, 3, 4, 5, 6, 8, 9, 10]
var res = arr.binarySearchLoop(8)
console.log(res)
