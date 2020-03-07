/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};

var firstUniqChar = function(s) {
  let res = -1;
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      res = i;
      return res;
    }
  }

  return res;
};