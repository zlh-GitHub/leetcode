/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  /**
   * 1. 思路：
   * Accepted
   * 57/57 cases passed (256 ms)
   * Your runtime beats 15.05 % of javascript submissions
   * Your memory usage beats 91.4 % of javascript submissions (49.4 MB)
   * 例如 w = [1, 2, 3, 4]，构建一个数组为 arr = [1, 3, 6, 10] 称之为前缀和数组
   * 如何构建 arr？arr[i] = w[i] + w[i - 1] + ... + w[0]
   * 这样一来只需要用 Math.random() 生成一个 [1, sum(w)] 之间数字，看落在 arr 中的哪个区间即可，
   * 如随机数为 4，落在 arr[1] 和 arr[2] 之间，那么返回索引 2
   */
  // this.arr = w.reduce((arr, num) => {
  //   const len = arr.length;
  //   arr.push(len === 0 ? num : arr[len - 1] + num);
  //   return arr;
  // }, []);


  /**
   * 2. 对 1 进行优化，空间换时间，现在的 1 时间复杂度是 O(n)，可以优化为 O(1)，
   * 使用 Map 或者 生成的 arr 长度为 sum(w)，值为在 w 中的索引，然后得到一个 [0, sum(w))
   * 的随机数，然后通过 Map[randomNum] 或者 arr[randomNum] 直接获取
   */
  // let sum = 0;
  // this.arr = w.reduce((arr, num, index) => {
  //   sum += num;
  //   return arr.concat(Array(num).fill(index));
  // }, []);
  // this.sum = sum;

  /**
   * 3. 最优。时间复杂度 O(logn)
   * O(logn) 使用二分法查找随机数所在的区间
   */
  this.arr = w.reduce((arr, num) => {
    const len = arr.length;
    arr.push(len === 0 ? num : arr[len - 1] + num);
    return arr;
  }, []);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  // 1. 
  // const len = this.arr.length;
  // const sum = this.arr[len - 1];
  // // 生成一个 [1, sum(w)] 之间数字
  // const randomNum = Math.floor(Math.random() * sum + 1);
  // // 得到随机数所在区间
  // return this.arr.findIndex(v => {
  //   return randomNum <= v;
  // })

  // 2. 
  // 生成一个 [0, sum(w)) 之间数字
  // const randomNum = Math.floor(Math.random() * this.sum);
  // // 得到随机数所在区间
  // return this.arr[randomNum];

  // 3. 二分法实现。。。
  
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end
