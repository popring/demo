/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let r = Number.parseInt(
    x
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  x < 0 ? (r *= -1) : r;

  if (r < -Math.pow(2, 31) || r > Math.pow(2, 31) - 1) return 0;
  return r;
};