/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  /**
   * 哈希表记录两个字符串中字符的出现次数，然后再判断
   * 128/128 cases passed (88 ms)
   * Your runtime beats 40.44 % of javascript submissions
   * Your memory usage beats 77.7 % of javascript submissions (43.3 MB)
   */
  // const ransomNoteMap = {};
  // const magazineMap = {};
  // const ransomNoteLen = ransomNote.length;
  // const magazineLen = magazine.length;
  // const temp = Math.max(ransomNoteLen, magazineLen);
  // for (let i = 0; i < temp; i++) {
  //   const rChar = ransomNote[i];
  //   const mChar = magazine[i];
  //   if (rChar) {
  //     ransomNoteMap[rChar] = (ransomNoteMap[rChar] || 0) + 1;
  //   }
  //   if (mChar) {
  //     magazineMap[mChar] = (magazineMap[mChar] || 0) + 1;
  //   }
  // }
  // for (let k in ransomNoteMap) {
  //   if (ransomNoteMap[k] > (magazineMap[k] || 0)) {
  //     return false;
  //   }
  // }
  // return true;

  /**
   * 官方解法
   * 先记录 magazine 中字符出现的频次，因为 ransomNote 能由 magazine 里面的字符构成的前提是
   * magazine 中的字符包含 ransomNote 中的所有字符，所以接着遍历 ransomNote ，将记录中对应
   * 字符的频次减掉，如果减掉之后小于 0，说明 magazine 中没有该字符或者是字符数不够，所以返回 false
   * 128/128 cases passed (68 ms)
   * Your runtime beats 84.93 % of javascript submissions
   * Your memory usage beats 96.57 % of javascript submissions (41.9 MB)
   */
  const ransomNoteLen = ransomNote.length;
  const magazineLen = magazine.length;
  if (ransomNoteLen > magazineLen) {
    return false;
  }
  const aCode = 'a'.charCodeAt();
  const arr = new Array(26).fill(0);
  for (let i = 0; i < magazineLen; i++) {
    arr[magazine.charCodeAt(i) - aCode]++;
  }

  for (let i = 0; i < ransomNoteLen; i++) {
    const pos = ransomNote.charCodeAt(i) - aCode;
    arr[pos]--;
    if (arr[pos] < 0) {
      return false;
    }
  }
  
  return true;
};
// @lc code=end

