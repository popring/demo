/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
    let t = s[j];
    s[j] = s[i];
    s[i] = t;
  }
};
