/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  /**
   * 58/58 cases passed (64 ms)
   * Your runtime beats 72.11 % of javascript submissions
   * Your memory usage beats 45.91 % of javascript submissions (43.2 MB)
   */
  let res = '';
  let word = '';
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      if (word) {
        res = res ? `${word} ${res}` : word;
        word = '';
      }
    } else {
      word += s[i];
    }
  }
  if (word) {
    res = res ? `${word} ${res}` : word;
  }
  return res;
};
// @lc code=end

