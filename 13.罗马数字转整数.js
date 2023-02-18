/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 1. 暴力解法，依次遍历，判断上个字符是否是特殊情况的字符
  // Accepted
  // 3999/3999 cases passed (108 ms)
  // Your runtime beats 82.77 % of javascript submissions
  // Your memory usage beats 57.8 % of javascript submissions (46.1 MB)
  // const map = {
  //   'I': 1,
  //   'V': 5,
  //   'X': 10,
  //   'L': 50,
  //   'C': 100,
  //   'D': 500,
  //   'M': 1000,
  // };
  // const len = s.length;
  // let sum = 0;
  // for (let i = 0; i < len; i++) {
  //   const char = s[i];
  //   const prevChar = s[i - 1];
  //   sum += map[char];
  //   if (['V', 'X'].includes(char) && prevChar === 'I') {
  //     sum -= (map.I * 2);
  //   } else if (['L', 'C'].includes(char) && prevChar === 'X') {
  //     sum -= (map.X * 2);
  //   } else if (['D', 'M'].includes(char) && prevChar === 'C') {
  //     sum -= (map.C * 2);
  //   }
  // }
  // return sum;

  // 2. 使用正则将特殊情况的两个字符替换成特殊字符
  // Accepted
  // 3999/3999 cases passed (108 ms)
  // Your runtime beats 82.77 % of javascript submissions
  // Your memory usage beats 44.56 % of javascript submissions (46.6 MB)
  // const map = {
  //   'I': 1,
  //   'V': 5,
  //   'X': 10,
  //   'L': 50,
  //   'C': 100,
  //   'D': 500,
  //   'M': 1000,
  //   'O': 4, // IV
  //   'P': 9, // IX
  //   'Q': 40, // XL
  //   'R': 90, // XC
  //   'S': 400, // CD
  //   'T': 900, // CM
  // };
  // s = s.replace(/IV|IX|XL|XC|CD|CM/g, char => {
  //   switch (char) {
  //     case 'IV':
  //       return 'O';
  //     case 'IX':
  //       return 'P';
  //     case 'XL':
  //       return 'Q';
  //     case 'XC':
  //       return 'R';
  //     case 'CD':
  //       return 'S';
  //     case 'CM':
  //       return 'T';
  //   }
  // });
  // const len = s.length;
  // let sum = 0;
  // for (let i = 0; i < len; i++) {
  //   sum += map[s[i]];
  // }
  // return sum;

  // 3. 最佳答案
  // Accepted
  // 3999/3999 cases passed (96 ms)
  // Your runtime beats 97.81 % of javascript submissions
  // Your memory usage beats 91.64 % of javascript submissions (45.2 MB)
  //按照题目的描述，可以总结如下规则：
  // 罗马数字由 I,V,X,L,C,D,M 构成；
  // 当小值在大值的左边，则减小值，如 IV=5-1=4；
  // 当小值在大值的右边，则加小值，如 VI=5+1=6；
  // 由上可知，右值永远为正，因此最后一位必然为正。
  // 一言蔽之，把一个小值放在大值的左边，就是做减法，否则为加法。
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  const len = s.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    const nextVal = map[s[i + 1]];
    const val = map[s[i]];
    if (val < nextVal) { // 如果比下一位小，则减去
      sum -= val;
    } else { // 否则相加
      sum += val;
    }
  }
  return sum;
};
// console.log(romanToInt('MCDLXXVI'));
// @lc code=end

