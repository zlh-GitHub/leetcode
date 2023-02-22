/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  /**
   * 哈希表记录各自的字符出现的频次然后进行比较
   * 38/38 cases passed (64 ms)
   * Your runtime beats 94.23 % of javascript submissions
   * Your memory usage beats 84.26 % of javascript submissions (41.6 MB)
   */
  // const sLen = s.length;
  // const tLen = t.length;
  // if (sLen !== tLen) {
  //   return false;
  // }
  // const sMap = {};
  // const tMap = {};
  // const temp = Math.max(sLen, tLen);
  // for (let i = 0; i < temp; i++) {
  //   const rChar = s[i];
  //   const mChar = t[i];
  //   if (rChar) {
  //     sMap[rChar] = (sMap[rChar] || 0) + 1;
  //   }
  //   if (mChar) {
  //     tMap[mChar] = (tMap[mChar] || 0) + 1;
  //   }
  // }
  // for (let k in sMap) {
  //   if (sMap[k] !== tMap[k]) {
  //     return false;
  //   }
  // }
  // return true;

  /**
   * 官方解法一：排序
   * 38/38 cases passed (104 ms)
   * Your runtime beats 16.42 % of javascript submissions
   * Your memory usage beats 6.82 % of javascript submissions (48.4 MB)
   */
  return s.length === t.length && [...s].sort().join() === [...t].sort().join();

  /**
   * 官方解法二：哈希表，类 383 题官方解法
   */
  // const sLen = s.length;
  // const tLen = t.length;
  // if (sLen !== tLen) {
  //   return false;
  // }
  // const aCode = 'a'.charCodeAt();
  // const arr = new Array(26).fill(0);
  // for (let i = 0; i < tLen; i++) {
  //   arr[t.charCodeAt(i) - aCode]++;
  // }

  // for (let i = 0; i < sLen; i++) {
  //   const pos = s.charCodeAt(i) - aCode;
  //   arr[pos]--;
  //   if (arr[pos] < 0) {
  //     return false;
  //   }
  // }
  
  // return true;
};
// @lc code=end

