/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  /**
   * 1. 哈希表
   * 71/71 cases passed (152 ms)
   * Your runtime beats 33.01 % of javascript submissions
   * Your memory usage beats 4.99 % of javascript submissions (59 MB)
   */
  // const map = {};
  // nums.forEach(num => {
  //   if (map[num]) {
  //     map[num] ++;
  //   } else {
  //     map[num] = 1;
  //   }
  // });
  // return Object.values(map).some(i => i >= 2);

  /**
   * 2. 去重后看数组长度
   * 71/71 cases passed (88 ms)
   * Your runtime beats 61.87 % of javascript submissions
   * Your memory usage beats 10.32 % of javascript submissions (54.8 MB)
   */
  const originLen = nums.length;
  const newNums = Array.from(new Set(nums));
  return newNums.length < originLen;

  /**
   * 3. 排序
   * 在对数字从小到大排序之后，数组的重复元素一定出现在相邻位置中。因此，我们可以扫描已排序的数组，
   * 每次判断相邻的两个元素是否相等，如果相等则说明存在重复的元素。
   */

  /**
   * 4. 哈希表
   * 优化：如果插入一个元素时发现该元素已经存在于哈希表中，则说明存在重复的元素。
   */
};
// @lc code=end

