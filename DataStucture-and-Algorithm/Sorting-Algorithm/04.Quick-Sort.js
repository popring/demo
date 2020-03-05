/**
 * 快速排序
 * 时间复杂度 O(nlogn)
 * 空间复杂度 
 * 选第一个数为基准(basic), 将后面的数大于 basic 的数加入 right, 小于的数加入 left，进行递归
 */
Array.prototype.quickSort = function() {
  const len = this.length
  if (len < 2) return this
  const basic = this[0]
  const left = [],
    right = []
  for (let i = 1; i < len; i++) {
    const iv = this[i]
    iv < basic && left.push(iv)
    iv > basic && right.push(iv)
  }
  return left.quickSort().concat(basic, right.quickSort())
}

const arr = [5, 3, 7, 4, 1, 9, 8, 6, 2]
const r = arr.quickSort()
console.log(r)
