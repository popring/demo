/**
 * 希尔排序
 * 时间复杂度 O(n * log^2 n)
 * 空间复杂度 O(n)
 * 希尔排序是插入排序的一种更高效的改进版本
 * 希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；
 * 随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。
 */
Array.prototype.shellSort = function() {
  var gap, i, j
  var temp
  for (gap = this.length >> 1; gap > 0; gap >>= 1)
    for (i = gap; i < this.length; i++) {
      temp = this[i]
      for (j = i - gap; j >= 0 && this[j] > temp; j -= gap)
        this[j + gap] = this[j]
      this[j + gap] = temp
    }
  return this
}
const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100]
console.log(arr.shellSort(10))
