/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let i = 0; 
  let res = '';
  while(word1[i] || word2[i]) {
    word1[i] && (res += word1[i]);
    word2[i] && (res += word2[i]);
    i++;
  }
  return res;
};
// @lc code=end
// mergeAlternately('abc', 'pqr');
