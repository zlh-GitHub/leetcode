/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// const stringIsPalindrome = str => {
//   // 1. 左右指针
//   let left = 0;
//   let right = str.length - 1;
//   while(left < right) {
//     if (str[left] === str[right]) {
//       left ++;
//       right --;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(stringIsPalindrome('zlhhlz'));
// console.log(stringIsPalindrome('zlhlz'));
// console.log(stringIsPalindrome('zlh'));

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  // 1. 将数字转换成字符串来解决
  // Accepted
  // 11510/11510 cases passed (164 ms)
  // Your runtime beats 32.7 % of javascript submissions
  // Your memory usage beats 59.06 % of javascript submissions (49.5 MB)
  // const stringIsPalindrome = str => {
  //   // 1. 左右指针
  //   let left = 0;
  //   let right = str.length - 1;
  //   while (left < right) {
  //     if (str[left] === str[right]) {
  //       left++;
  //       right--;
  //     } else {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // return stringIsPalindrome(String(x));

  // 2. 反转数字，判断是否相等，但是要考虑数字溢出的情况。
  // 解决思路是只反转一半：
  // 例如，输入 1221，我们可以将数字 “1221” 的后半部分从 “21” 反转为 “12”，并将其与前半部分 “12” 进行比较，因为二者相同，我们得知数字 1221 是回文
  // Accepted
  // 11510/11510 cases passed (112 ms)
  // Your runtime beats 99.76 % of javascript submissions
  // Your memory usage beats 94.77 % of javascript submissions (48.8 MB)
  if (x % 10 === 0) {
    return false; // 除0以外所有个位数是0的数字均不可能是回文数字
  }
  // 对于数字 1221，如果执行 1221 % 10，我们将得到最后一位数字 1，要得到倒数第二位数字，我们可以先通过除以 10 把最后一位数字从 1221 中移除，1221 / 10 = 122，再求出上一步结果除以 10 的余数，122 % 10 = 2，就可以得到倒数第二位数字。如果我们把最后一位数字乘以 10，再加上倒数第二位数字，1 * 10 + 2 = 12，就得到了我们想要的反转后的数字。如果继续这个过程，我们将得到更多位数的反转数字。

  // 现在的问题是，我们如何知道反转数字的位数已经达到原始数字位数的一半？

  // 由于整个过程我们不断将原始数字除以 10，然后给反转后的数字乘上 10，所以，当原始数字小于或等于反转后的数字时，就意味着我们已经处理了一半位数的数字了。
  let reverseSecondHalf = 0; // 后半部分的反转结果
  while (reverseSecondHalf < x) {
    const lastNum = x % 10;
    x = Math.floor(x / 10);
    reverseSecondHalf = reverseSecondHalf * 10 + lastNum;
  }
  return reverseSecondHalf === x || x === Math.floor(reverseSecondHalf / 10)
};
// console.log(isPalindrome(-121));
// console.log(isPalindrome(121));
// console.log(isPalindrome(10));
// console.log(isPalindrome(213));
// @lc code=end

