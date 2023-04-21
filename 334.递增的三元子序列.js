/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  /**
   * 1. 双向遍历
   * 78/78 cases passed (100 ms)
   * Your runtime beats 34.16 % of javascript submissions
   * Your memory usage beats 25.52 % of javascript submissions (63.5 MB)
   */
  const len = nums.length;
  const leftMin = new Array(len).fill(Infinity);
  const rightMax = new Array(len).fill(-Infinity);
  for (let i = 1; i < len - 1; i++) {
    leftMin[i] = Math.min(nums[i - 1], leftMin[i - 1]);
  }
  for (let i = len - 2; i > 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i + 1]);
  }
  for (let i = 1; i < len - 1; i++) {
    if (leftMin[i] < nums[i] && rightMax[i] > nums[i]) {
      return true;
    }
  }
  return false;
};
// @lc code=end
