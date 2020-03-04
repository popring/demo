/**
 * TODO 快速排序
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
