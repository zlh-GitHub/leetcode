/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  /**
   * 1. 双重遍历
   */
  // const len1 = nums1.length;
  // const len2 = nums2.length;
  // const res = [];
  // for (let i = 0; i < len1; i++) {
  //   for (let j = 0; j < len2; j++) {
  //     if (nums1[i] === nums2[j]) { // 交集
  //       res.push(nums1[i]);
  //       nums2.splice(j, 1); // 删除第二个数组中的该值，避免记录多次
  //       j--; // 删除后索引要归位
  //       break; // 跳出内层循环
  //     }
  //   }
  // }
  // return res;

  /**
   * 2. 哈希表
   * 为了降低空间复杂度，可以首先遍历较短的数组并在哈希表中记录
   * 每个数字以及对应出现的次数，然后遍历较长的数组得到交集。
   * 56/56 cases passed (60 ms)
   * Your runtime beats 88.05 % of javascript submissions
   * Your memory usage beats 50.16 % of javascript submissions (41.9 MB)
   */
  // const map = {};
  // const len1 = nums1.length;
  // const len2 = nums2.length;
  // for (let i = 0; i < len1; i++) {
  //   const key = nums1[i];
  //   const count = map[key] || 0;
  //   map[key] = count + 1;
  // }
  // const res = [];
  // for (let i = 0; i < len2; i++) {
  //   const key = nums2[i];
  //   if (map[key]) {
  //     res.push(key);
  //     map[key]--;
  //   }
  // }
  // return res;

  /**
   * 3. 排序 + 双指针
   * 如果两个数组是有序的，则可以使用双指针的方法得到两个数组的交集。
   * 首先对两个数组进行排序，然后使用两个指针遍历两个数组。
   * 初始时，两个指针分别指向两个数组的头部。每次比较两个指针指向的两个数组中的数字，
   * 如果两个数字不相等，则将指向较小数字的指针右移一位，如果两个数字相等，
   * 将该数字添加到答案，并将两个指针都右移一位。当至少有一个指针超出数组范围时，遍历结束
   * 56/56 cases passed (56 ms)
   * Your runtime beats 96.02 % of javascript submissions
   * Your memory usage beats 19.6 % of javascript submissions (43.2 MB)
   */
  const sortNums1 = [...nums1].sort((a, b) => a - b);
  const sortNums2 = [...nums2].sort((a, b) => a - b);
  let p1 = 0,
    p2 = 0;
  const len1 = sortNums1.length;
  const len2 = sortNums2.length;
  const res = [];
  while (p1 < len1 && p2 < len2) {
    const num1 = sortNums1[p1];
    const num2 = sortNums2[p2];
    if (num1 === num2) {
      res.push(num1);
      p1++;
      p2++;
    } else if (num1 < num2) {
      p1++;
    } else {
      p2++;
    }
  }
  return res;
};
// @lc code=end
