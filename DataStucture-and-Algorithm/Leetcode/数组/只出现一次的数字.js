/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  /**
   * 1. 计算出数字出现的次数
   * 2. 存入对象
   * 3. 遍历对象, 找出值为 1 的键
   */
  let obj = new Object()
  nums.forEach(function(v) {
    if (obj.hasOwnProperty(v)) {
      obj[v]++
    } else {
      obj[v] = 1
    }
  })
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const e = obj[key]
      if (e !== 1) continue
      return key
    }
  }
  return 0
}
