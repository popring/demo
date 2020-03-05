/**
 * 计数排序
 * 时间复杂度 O(n+k)
 * 空间复杂度 O(n+k)
 * 此方法会修改原数组, 直接将数字放到相应的索引中，并记录次数
 * 例如：2 放入数组的 第三个元素，第三个元素的值为1，表示2出现一次
 */
Array.prototype.countSort = function() {
  const count = []
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    count[item] >= 1 ? count[item]++ : (count[item] = 1)
  }

  const wrapCount = []
  for (let i = 0; i < count.length; i++) {
    if (count[i]) {
      while (count[i] >= 1) {
        wrapCount.push(i)
        count[i]--
      }
    }
  }
  return wrapCount
}

const arr = [5, 3, 7, 4, 8, 9, 8, 6, 20]
const r = arr.countSort()
console.log(r)
