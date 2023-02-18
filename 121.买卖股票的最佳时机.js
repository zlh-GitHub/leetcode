/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * 1. 暴力解
   * 用 f(i) 代表以第 i 天卖出时可以得到的最大利润，求出 f(1) 到 f(nums.prices - 1)，再从中拿出最大值
   * 超出时间限制\U0001f6ab
   */
  // const len = prices.length;
  // let res = 0;
  // for (let i = 1; i < len; i++) {
  //   let copyI = i;
  //   const curPrice = prices[copyI];
  //   let minPrice = Infinity;
  //   while(copyI > 0) {
  //     minPrice = Math.min(minPrice, prices[--copyI]);
  //   }
  //   res = Math.max(curPrice - minPrice, res);
  // }
  // return res;

  // 超出时间限制\U0001f6ab
  // const len = prices.length;
  // let max = 0;
  // for (let i = 0; i < len; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     const diff = prices[j] - prices[i];
  //     if (diff > max) {
  //       max = diff;
  //     }
  //   }
  // }
  // return max;

  /**
   * 2. 一次遍历
   * 211/211 cases passed (88 ms)
   * Your runtime beats 44.33 % of javascript submissions
   * Your memory usage beats 88.33 % of javascript submissions (50.5 MB)
   */
  const len = prices.length;
  let minPrice = prices[0]; // 记录最小的价格
  let res = 0; // 记录最大收益，默认为0
  for (let i = 1; i < len; i++) {
    const price = prices[i];
    if (price < minPrice) {
      // 如果当前价格小于最小价格
      minPrice = price; // 更新最小价格（不用更新收益）
    } else if (price - minPrice > res) {
      /**
       * 如果当前价格大于最小价格，那就算下当天出售的话和之前
       * 的最大收益进行比较，如果收益比之前好则更新最大收益
       */
      res = price - minPrice;
    }
  }
  return res;
};
// @lc code=end
