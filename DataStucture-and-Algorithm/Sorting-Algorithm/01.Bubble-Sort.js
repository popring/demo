/**
 * 冒泡算法.
 * 时间复杂度 O(n^2).
 * 空间复杂度 O(1).
 * @param {boolean} x 默认为true, true为从小到大, false为从大到小排序
 * @returns {number[]} 返回原数组，原数组为排序后的数组
 */
Array.prototype.bubbleSort = function(x = true) {
  let tmp
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (x ? this[j] > this[j + 1] : this[j] < this[j + 1]) {
        tmp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = tmp
      }
    }
  }
  return this
}

let a = [1, 8, 3, 2, 5, 6, 7, 4, 9, 0]
a.bubbleSort(false)
console.log(a)
