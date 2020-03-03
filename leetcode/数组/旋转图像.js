/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let len = matrix.length
  const newMatrix = new Array(len)
  // 创建空的二维数组
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = new Array(len).fill(0)
  }
  
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j][len - i - 1] = matrix[i][j]
    }
  }
  // 将新数组的值放入旧数组中
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = newMatrix[i][j]
    }
  }
}
