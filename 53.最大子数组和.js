/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  /**
   * 1. 从任意位置元素两边发散，求最大值，直到数组遍历完
   * 太垃圾了，可以解决问题，但是运行时间太长（其实两遍循环就可以了。。。）
   */
  // let maxValue = nums[0]; // 初始最大值
  // const len = nums.length;
  // for (let i = 0; i < nums.length; i++) { // 依次拿出所有元素从两边发散
  //   // 假设[nums[i]]是具有最大和的连续子数组，所以res就为nums[i]
  //   let res = nums[i];
  //   let left = i;
  //   let right = i;
  //   for (let l = i; l >= 0; l--) {
  //     // left 指针往左移动
  //     for (let r = i; r < len; r++) {
  //       // right 指针往右移动
  //       const subNums = nums.slice(l, r + 1);
  //       const newRes = subNums.reduce((r, n) => r + n, 0);
  //       if (newRes > res) {
  //         res = newRes;
  //         left = l;
  //         right = r;
  //       }
  //     }
  //   }
  //   if (res > maxValue) {
  //     maxValue = res;
  //   }
  // }
  // return maxValue;

  // 上面的优化
  // const len = nums.length;
  // let max = nums[0];
  // for (let l = 0; l < len; l++) {
  //   for (let r = l + 1; r <= len; r++) { // 注意：r 的初始值是 l + 1
  //     const subArray = nums.slice(l, r);
  //     const subArraySum = subArray.reduce((s, n) => s + n, 0);
  //     max = Math.max(max, subArraySum);
  //   }
  // }
  // return max;

  /**
   * 2. 动态规划（我的写法）
   * 用 f(i) 代表以第 i 个数结尾的「连续子数组的最大和」，求出 f(0) 到 f(nums.length - 1)，再从中拿出最大值
   * 210/210 cases passed (104 ms)
   * Your runtime beats 10.17 % of javascript submissions
   * Your memory usage beats 9.71 % of javascript submissions (54 MB)
   */
  // if (!nums || !nums.length) {
  //   return;
  // }
  // if (nums.length === 1) {
  //   return nums[0];
  // }
  // const len = nums.length;
  // const f = [nums[0]];
  // for (let i = 1; i < len; i++) {
  //   f[i] = Math.max(f[i - 1] + nums[i], nums[i]);
  // }
  // return Math.max(...f);

  // 官方写法：时间复杂度O(n)，空间复杂度O(1)，使用了「滚动变量」优化空间
  // let pre = 0, maxAns = nums[0];
  // nums.forEach(x => {
  //   pre = Math.max(pre + x, x);
  //   maxAns = Math.max(maxAns, pre);
  // });
  // return maxAns;

  /**
   * 3. 分治（官方写法）TODO
   * 分治法的思路是这样的，其实也是分类讨论。
   * 连续子序列的最大和主要由这三部分子区间里元素的最大和得到：
   * 第 1 部分：子区间 [left, mid]；
   * 第 2 部分：子区间 [mid + 1, right]；
   * 第 3 部分：包含子区间 [mid , mid + 1] 的子区间，即 nums[mid] 与 nums[mid + 1] 一定会被选取。
   * 对这三个部分求最大值即可。
   */

  function Status(l, r, m, i) {
    this.lSum = l;
    this.rSum = r;
    this.mSum = m;
    this.iSum = i;
  }

  const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
  };

  const getInfo = (a, l, r) => {
    if (l === r) {
      return new Status(a[l], a[l], a[l], a[l]);
    }
    const m = (l + r) >> 1; // 取中位数
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
  };

  return getInfo(nums, 0, nums.length - 1).mSum;
};
// @lc code=end
