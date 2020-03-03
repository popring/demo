/**
 * 选择排序
 * 时间复杂度 O(n^2).
 * 空间复杂度 O(n).
 */
Array.prototype.selectionSort = function() {
  let min
  for (let i = 0; i < this.length - 1; i++) {
    min = i
    for (let j = i + 1; j < this.length; j++) {
      if(this[j] < this[min]) {
        min = j
      }
    }
    // 交换两个数
    if (min !== i) {
      this[min] =  this[min] ^ this[i]
      this[i] = this[min] ^ this[i]
      this[min] =  this[min] ^ this[i]
    }
  }
  return this
}

let a = [1, 8, 3, 2, 5, 6, 7, 4, 9, 0]
a.selectionSort()
console.log(a)
