/*
 * @lc app=leetcode.cn id=2413 lang=javascript
 *
 * [2413] 最小偶倍数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  /**
   * 最小公倍数 = (n * m) / nm的最大公约数
   * 任意正偶数与 2 的最大公约数 为 2，任意正奇数与 2 的最大公约数为 1
   */
  return n % 2 === 0 ? n : n * 2;
};
// @lc code=end

