/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  /**
   * 30/30 cases passed (64 ms)
   * Your runtime beats 42.44 % of javascript submissions
   * Your memory usage beats 15.49 % of javascript submissions (41.4 MB)
   */
  if (numRows === 1) {
    return [[1]];
  }
  const res = [];
  for (let i = 0; i < numRows; i++) {
    res[i] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res;
};
// @lc code=end
