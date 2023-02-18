/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /**
   * 1. 合并两个数组，然后排序输出（自我认为这不算算法）
   * 59/59 cases passed (64 ms)
   * Your runtime beats 46.88 % of javascript submissions
   * Your memory usage beats 13.91 % of javascript submissions (41.4 MB)
   */
  // nums1.splice(m, n, ...nums2);
  // return nums1.sort((a, b) => a - b);

  /**
   * 2. 双指针
   * 方法一没有利用数组nums1和nums2已经被排序的性质。
   * 为了利用这一性质，我们可以使用双指针方法。这一方法将两个数组看作队列，
   * 每次从两个数组头部取出比较小的数字放到结果中
   * 59/59 cases passed (68 ms)
   * Your runtime beats 24.14 % of javascript submissions
   * Your memory usage beats 60.02 % of javascript submissions (41.1 MB)
   */
  let p1 = 0,
    p2 = 0;
  const res = [];
  while (p1 < m || p2 < n) {
    const num1 = nums1[p1];
    const num2 = nums2[p2];
    if (p1 === m) {
      res.push(num2);
      p2++;
    } else if (p2 === n) {
      res.push(num1);
      p1++;
    } else if (num1 < num2) {
      res.push(num1);
      p1++;
    } else {
      res.push(num2);
      p2++;
    }
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = res[i];
  }

  /**
   * 3. 逆向双指针
   * 方法二中，之所以要使用临时变量，是因为如果直接合并到数组 nums1 中，
   * nums1 中的元素可能会在取出之前被覆盖。那么如何直接避免覆盖 nums1 中的元素呢？
   * 观察可知，nums1 的后半部分是空的，可以直接覆盖而不会影响结果。
   * 59/59 cases passed (60 ms)
   * Your runtime beats 70.87 % of javascript submissions
   * Your memory usage beats 81.41 % of javascript submissions (41 MB)
   */
  // let p1 = m - 1; p2 = n - 1;
  // let tail = m + n - 1;
  // let cur;
  // while(p1 >= 0 || p2 >= 0) {
  //   const num1 = nums1[p1];
  //   const num2 = nums2[p2];
  //   if (p1 < 0) {
  //     cur = num2;
  //     p2--;
  //   } else if (p2 < 0) {
  //     cur = num1;
  //     p1--;
  //   } else if (num1 > num2) {
  //     cur = num1;
  //     p1--;
  //   } else {
  //     cur = num2;
  //     p2--;
  //   }
  //   nums1[tail] = cur;
  //   tail--;
  // }
};
// @lc code=end
