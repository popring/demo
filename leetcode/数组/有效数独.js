/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let len = board.length
  // 数字 1-9 在每一行只能出现一次。
  for (const bd of board) {
    if (!ck(bd)) return false
  }

  // 数字 1-9 在每一列只能出现一次。
  for (let i = 0; i < len; i++) {
    const tpa = []
    for (let j = 0; j < len; j++) {
      tpa.push(board[j][i])
    }
    if (!ck(tpa)) return false
  }

  // 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
  const t1 = []
  let t2 = [],
    idx = 0
  while (true) {
    for (let i = 0; i < len; i++) {
      for (let j = idx; j < len; j++) {
        t2.push(board[i][j])
        if ((j + 1) % 3 === 0) {
          break
        }
      }
      if ((i + 1) % 3 === 0) {
        t1.push(t2)
        t2 = []
        continue
      }
    }
    idx += 3
    if (idx >= 9) break
  }

  for (const item of t1) {
    if (!ck(item)) return false
  }

  return true
}

/**
 * 检查一个数组中是否有重复的元素
 * @param {number[]} nums 数组
 */
function ck(nums) {
  const t = nums
  return nums.every((v1, i1) => {
    return t.findIndex((v2, i2) => v2 !== '.' && v2 === v1 && i1 !== i2) === -1
  })
}
