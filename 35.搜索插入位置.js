/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  /**
   * 1. 二分法
   * 65/65 cases passed (48 ms)
   * Your runtime beats 98.66 % of javascript submissions
   * Your memory usage beats 77.62 % of javascript submissions (41 MB)
   */
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midValue = nums[mid];
    if (target === midValue) {
      return mid;
    } else if (target > midValue) {
      left = mid + 1;
    } else {
      right = mid -1;
    }
  }
  /**
   * 当执行到这里的时候说名 left = right + 1，因为当 left === right 时还会进入 while 循环
   */
  return left;
};
// @lc code=end

