/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // 1. 暴力枚举
  // Accepted
  // 57/57 cases passed (104 ms)
  // Your runtime beats 39.57 % of javascript submissions
  // Your memory usage beats 73.17 % of javascript submissions (41.4 MB)
  // const len = nums.length;
  // for (let i = 0; i < len - 1; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }


  // 2. 哈希表
  // Accepted
  // 57 / 57 cases passed(68 ms)
  // Your runtime beats 74.26 % of javascript submissions
  // Your memory usage beats 42.87 % of javascript submissions(41.8 MB)
  const map = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    const left = target - num;
    const leftIndex = map[left];
    if (leftIndex || leftIndex === 0) {
      return [leftIndex, i];
    } else {
      map[num] = i;
    }
  }
};
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// @lc code=end

