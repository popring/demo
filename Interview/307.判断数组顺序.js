function isSorted(paramArray) {
  let result = null;
  let prev = paramArray[0];
  for (let index = 1; index < paramArray.length; index++) {
    // 如果和前一个元素相等直接跳过
    if (paramArray[index] === prev) {
      continue;
    }
    const compare = paramArray[index] > prev ? 1 : -1;
    if (result === null) {
      result = compare;
    } else if (result !== compare) {
      // 如果上个比较结果和当前不一致表面是乱序
      return 0;
    }
    prev = paramArray[index];
  }
  return result;
}

isSorted([0, 1, 2, 2, 6]);  // 1
isSorted([4, 3, -1]);  // -1
isSorted([4, 3, 1, 5, 1]);  // 0