/**
 * 顺序查找
 * @param {T} val 待查找的值
 * @returns {Number} 索引值
 */
Array.prototype.sequentialSearch = function (val) {
  for (let i = 0; i < this.length; i++) {
    if (val === this[i]) {
      return i
    }
  }
  return -1
}

var arr = [1, 3, 4, 5, 6, 8, 9, 10]
var res = arr.sequentialSearch(8)
console.log(res)