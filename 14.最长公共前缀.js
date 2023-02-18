/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 1. 暴力解法，把第一个字符串拿出来依次遍历字符进行判断（纵向扫描）
  // Accepted
  // 124/124 cases passed (68 ms)
  // Your runtime beats 53.9 % of javascript submissions
  // Your memory usage beats 59.41 % of javascript submissions (41.4 MB)
  // let res = '';
  // const [firstStr, ...leftStrs] = strs;
  // const firstStrLen = firstStr.length;
  // for (let i = 0; i < firstStrLen; i++) {
  //   // 如果字符都相等，进行拼接
  //   if (leftStrs.every(s => s[i] === firstStr[i])) {
  //     res += firstStr[i];
  //   } else {
  //     // 否则直接退出，返回结果
  //     break;
  //   }
  // }
  // return res;

  // 2. 横向扫描
  // LCP(S1​…Sn​)=LCP(LCP(LCP(S1​,S2​),S3​),…Sn​)
  // Accepted
  // 124/124 cases passed (60 ms)
  // Your runtime beats 87.34 % of javascript submissions
  // Your memory usage beats 65.81 % of javascript submissions (41.3 MB)
  /**
   * 得到两个字符串的最长公共前缀
   * @param {String} str1 
   * @param {String} str2 
   * @returns 
   */
  // const _longestCommonPrefix = (str1, str2) => {
  //   let i = 0;
  //   let minLen = Math.min(str1.length, str2.length);
  //   while (i < minLen && str1[i] === str2[i]) {
  //     i++
  //   }
  //   return str1.substring(0, i);
  // }

  // let len = strs.length;
  // let res = strs[0];
  // for (let i = 1; i < len; i++) {
  //   res = _longestCommonPrefix(res, strs[i]);
  //   if (!res) { // 如果公共前缀为0，那么直接退出
  //     break;
  //   }
  // }
  // return res;

  // 3. 分治
  // LCP(S1​…Sn​)=LCP(LCP(S1​…Sk​),LCP(Sk+1​…Sn​))
};
// @lc code=end

