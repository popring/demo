/**
 * 插入排序
 * 时间复杂度 O(n^2)
 * 空闲复杂度 O(n)
 * 首位默认认为已排序，然后将未排序的元素与已排序的元素进行比较，如果小于已排序的元素则插入到比较元素之前
 */
Array.prototype.insertionSort = function() {
  for (let i = 1; i < this.length; i++) {
    for (let j = 0; j < i; j++) {
      if (this[j] > this[i]) {
        // 将元素 删除 并添加到指定位置
        this.splice(j, 0, ...this.splice(i, 1))
        break
      }
    }
  }
}
const arr = [3, 5, 2, 11, 1, 2]
arr.insertionSort()
console.log(arr)
