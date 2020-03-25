/**
 * 题目一: 比较两个语意化版本号
 *
 *1. 入参字符串规则“x.y.z”，xyz均为自然数且至少有x位
 *2. 返回比较结果例如：
 * compareVersion('0.1', '1.1.1'); // 返回-1
 * compareVersion('13.37', '1.2'); // 返回1
 * compareVersion('1.1', '1.1.0'); // 返回0
 * compareVersion('1.1', '1'); // 返回0
 **/
// const compareVersion = (versionA, versionB) => {
//   let vas = versionA.split('.')
//   let vbs = versionB.split('.')

//   let minLen = vas.length > vbs.length ? vbs.length : vas.length

//   for (let i = 0; i < minLen; i++) {
//     let va = Number.parseInt(vas[i]) || 0
//     let vb = Number.parseInt(vbs[i]) || 0
//     if (va > vb) {
//       return 1
//     } else if (va < vb) {
//       return -1
//     } else {
//       continue
//     }
//   }
//   return 0
// }

function compareVersion(versionA, versionB) {
  const toNumbers = function(version) {
    const versionNumbers = version.split('.').map(Number)
    versionNumbers.push(0)
    versionNumbers.push(0)
    versionNumbers.length = 3
    return versionNumbers
  }

  // 标准化位三只元素的数组
  const numbersA = toNumbers(versionA)
  const numbersB = toNumbers(versionB)
  for (const index in numbersA) {
    // 如果俩值相同继续比较下一位
    if (numbersA[index] === numbersB[index]) {
      continue
    }
    return numbersA[index] > numbersB[index] ? 1 : -1
  }
  return 0
}
console.log(compareVersion('0.1', '1.1.1'))
console.log(compareVersion('13.37', '1.2'))
console.log(compareVersion('1.1', '1.1.0'))
console.log(compareVersion('1.1', '1'))
