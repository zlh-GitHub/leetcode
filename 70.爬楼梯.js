/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 1. 递归，可以解决问题，但是耗时太长，无法通过
  // if (n <= 2) {
  //   return n;
  // }
  // return climbStairs(n - 1) + climbStairs(n - 2);

  // 2. 循环，用一个数组记录历史数据
  // Accepted
  // 45/45 cases passed (60 ms)
  // Your runtime beats 60.67 % of javascript submissions
  // Your memory usage beats 88.94 % of javascript submissions (40.7 MB)
  // const history = [1, 1, 2];
  // for (let i = 3; i <= n; i++) {
  //   history[i] = history[i - 1] + history[i - 2];
  // }
  // return history[n]

  // 3. 滚动数组
  // Accepted
  // 45/45 cases passed (64 ms)
  // Your runtime beats 35.32 % of javascript submissions
  // Your memory usage beats 5.13 % of javascript submissions (41.1 MB)
  // let prevprev = 1, prev = 1;
  // for (let i = 2; i <= n; i++) {
  //   [prevprev, prev] = [prev, prev + prevprev];
  // }
  // return prev;


  // Accepted
  // 45/45 cases passed (68 ms)
  // Your runtime beats 15.21 % of javascript submissions
  // Your memory usage beats 17 % of javascript submissions (41 MB)
  // let prevprev = 0, prev = 0, cur = 1; // cur初始值是n=0的结果
  // for (let i = 1; i <= n; i++) {
  //   prevprev = prev;
  //   prev = cur;
  //   cur = prev + prevprev;
  // }
  // return cur;

  // 4. 矩阵快速幂

  // 5. 通项公式
};
console.log(climbStairs(1));
// @lc code=end

