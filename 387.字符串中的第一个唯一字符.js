/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  /**
   * 我的解法
   * 105/105 cases passed (76 ms)
   * Your runtime beats 95.94 % of javascript submissions
   * Your memory usage beats 84.66 % of javascript submissions (43.7 MB)
   */
  // if (!s) {
  //   return -1;
  // }
  // const len = s.length;
  // if (len === 1) {
  //   return 0;
  // }
  // for (let i = 0; i < len; i++) {
  //   // 看一下该字符第一次出现和最后一次出现的索引是不是都相等
  //   if (s.lastIndexOf(s[i]) === i && s.indexOf(s[i]) === i) {
  //     return i;
  //   }
  // }
  // return -1;

  /**
   * 官方一：哈希表存储频数
   */
  // const map = {}; // 存储每个字符出现的次数
  // const len = s.length;
  // for (let i = 0; i < len; i++) {
  //   map[s[i]] = (map[s[i]] + 1) || 1;
  // }
  // for (let i = 0; i < len; i++) {
  //   if (map[s[i]] === 1) { // 判断字符是不是只出现了一次
  //     return i;
  //   }
  // }
  // return -1;

  /**
   * 官方二：哈希表存储索引
   * 当我们第一次遍历字符串时，设当前遍历到的字符为 c，如果 c 不在哈希映射中，我们就将 
   * c 与它的索引作为一个键值对加入哈希映射中，否则我们将 c 在哈希映射中对应的值修改为 -1
   * 105/105 cases passed (112 ms)
   * Your runtime beats 39.22 % of javascript submissions
   * Your memory usage beats 92.21 % of javascript submissions (43.6 MB)
   */
  // const map = new Map();
  // const len = s.length;
  // for (let i = 0; i < len; i++) {
  //   const char = s[i];
  //   if (map.has(char)) {
  //     // map[char]有值了，说明char出现过了，改为-1
  //     map.set(char, -1);
  //   } else {
  //     map.set(char, i);
  //   }
  // }
  // // 找出最小索引
  // let res = Infinity;
  // map.forEach(v => {
  //   if (v !== -1) { // -1 的过滤掉
  //     res = res > v ? v : res
  //   }
  // });
  // return res === Infinity ? -1 : res;

  /**
   * 官方三：队列
   */
};
// firstUniqChar('leetcode');
// @lc code=end

