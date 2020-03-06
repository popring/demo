/**
 * 基数排序
 * 时间复杂度 O(kN)
 * 空间复杂度 O(k + N)
 * 将整数按位数来切割成不同的数字，然后将每个位数进行比较，以此类推，直至比较完成，比较完成后顺序已经排好了
 * LSD次位优先（从最后一位开始），也有MSD主位优先（从高位数开始）
 * 如果数字的位数较小，适合用
 * 基数排序是根据关键字排序，所以不只是用于数字排序。
 */
Array.prototype.radixSort  = function() {
  let arr = this.slice(0)
  const max = Math.max(...arr)
  let digit = `${max}`.length
  let start = 1
  let buckets = []
  while(digit > 0) {
    start *= 10
    for(let i = 0; i < arr.length; i++) {
      const index = arr[i] % start
      !buckets[index] && (buckets[index] = [])
      buckets[index].push(arr[i])
    }
    arr = []
    for(let i = 0; i < buckets.length; i++) {
      buckets[i] && (arr = arr.concat(buckets[i]))
    }
    buckets = []
    digit --
  }
  return arr
}
const arr = [1, 10, 100, 1000, 98, 67, 3, 28, 67, 888, 777]
const r = arr.radixSort ()
console.log(r)
