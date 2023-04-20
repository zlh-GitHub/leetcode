/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  /**
   * 1. 
   * 47/47 cases passed (76 ms)
   * Your runtime beats 14.48 % of javascript submissions
   * Your memory usage beats 65.54 % of javascript submissions (43.9 MB)
   */
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  // 查找区间 [left, right]
  while(left <= right) {
    // left + (right - left) / 2 和 (left + right) / 2 的结果相同，但是有效防止了 left 和 right 太大，直接相加导致溢出的情况。
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // 因为查找区间是左右闭合，mid 查过了，所以要把 mid 排除
    } else if (nums[mid] > target) {
      right = mid - 1; // 因为查找区间是左右闭合，mid 查过了，所以要把 mid 排除
    }
  }
  return -1;
};
// @lc code=end

