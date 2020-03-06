/**
 * 桶排序
 * 时间复杂度 O(n+k)
 * 空间复杂度 O(n*k)
 * 将每个元素分配到有限的桶中，然后再将桶内的元素排序
 */
Array.prototype.bucketSort = function(num) {
  // 交换数组中的两个数
  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  const max = Math.max(...this)
  const min = Math.min(...this)
  const buckets = []
  // 桶的数量
  const bucketsSize = Math.floor((max - min) / num) + 1
  for (let i = 0; i < this.length; i++) {
    const index = ~~(this[i] / bucketsSize)
    !buckets[index] && (buckets[index] = [])
    buckets[index].push(this[i])
    let l = buckets[index].length
    while (l > 0) {
      // 将桶内的元素进行排序
      buckets[index][l] < buckets[index][l - 1] &&
        swap(buckets[index], l, l - 1)
      l--
    }
  }
  let wrapBuckets = []
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]))
  }
  return wrapBuckets
}
const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100]
console.log(arr.bucketSort(10))
