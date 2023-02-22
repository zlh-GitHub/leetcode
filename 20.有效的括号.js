/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /**
   * 栈
   * 92/92 cases passed (80 ms)
   * Your runtime beats 16.89 % of javascript submissions
   * Your memory usage beats 88.78 % of javascript submissions (41.1 MB)
   */
  const len = s.length;
  if (len % 2 === 1) {
    // 长度为奇数直接返回false
    return false;
  }
  const bracket_map = {
    '[': ']',
    '(': ')',
    '{': '}',
  };
  const leftBracket = Object.keys(bracket_map);
  if (leftBracket.includes(s[len - 1])) {
    // 左括号结尾直接返回false
    return false;
  }
  const stack = [];
  for (let i = 0; i < len; i++) {
    const char = s[i];
    if (leftBracket.includes(char)) {
      stack.push(char);
    } else if (bracket_map[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end
