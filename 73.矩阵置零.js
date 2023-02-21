/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  /**
   * 1. 只有感情，没有技巧
   * 166/166 cases passed (88 ms)
   * Your runtime beats 22.41 % of javascript submissions
   * Your memory usage beats 50.47 % of javascript submissions (44 MB)
   */
  // const map = {
  //   rows: new Set(), // 用 set 是因为可以去重
  //   cols: new Set(),
  // };
  // const row = matrix.length;
  // const col = matrix[0].length;
  // for (let r = 0; r < row; r++) {
  //   for (let c = 0; c < col; c++) {
  //     if (matrix[r][c] === 0) { // 记录行列
  //       map.rows.add(r);
  //       map.cols.add(c);
  //     }
  //   }
  // }
  // map.rows.forEach(row => { // 将该行的所有值置为0
  //   for (let c = 0; c < col; c++) {
  //     matrix[row][c] = 0;
  //   }
  // })
  // map.cols.forEach(col => { // 将该列的所有值置为0
  //   for (let r = 0; r < row; r++) {
  //     matrix[r][col] = 0;
  //   }
  // })
  // return matrix;

  /**
   * 官方一：使用标记数组
   * 166/166 cases passed (80 ms)
   * Your runtime beats 57.37 % of javascript submissions
   * Your memory usage beats 75.55 % of javascript submissions (43.9 MB)
   */
  // const m = matrix.length, n = matrix[0].length;
  // const row = new Array(m).fill(false);
  // const col = new Array(n).fill(false);
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (matrix[i][j] === 0) {
  //       row[i] = col[j] = true;
  //     }
  //   }
  // }
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (row[i] || col[j]) {
  //       matrix[i][j] = 0;
  //     }
  //   }
  // }

  /**
   * 官方二：使用两个标记变量
   * 166/166 cases passed (96 ms)
   * Your runtime beats 9.4 % of javascript submissions
   * Your memory usage beats 84.01 % of javascript submissions (43.8 MB)
   */
  // const m = matrix.length, n = matrix[0].length;
  // let flagCol0 = false, // 第一列是否包含0
  // flagRow0 = false; // 第一行是否包含0
  // for (let i = 0; i < m; i++) {
  //   if (matrix[i][0] === 0) {
  //     flagCol0 = true;
  //   }
  // }
  // for (let j = 0; j < n; j++) {
  //   if (matrix[0][j] === 0) {
  //     flagRow0 = true;
  //   }
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     if (matrix[i][j] === 0) {
  //       /**
  //        * 如果该位置为0，则将[i][0]和[0][j]都置为0
  //        * 其实这里就是将矩阵的第一行和第一列当做了
  //        * 官方方法一种的标记变量row和col
  //        */
  //       matrix[i][0] = matrix[0][j] = 0;
  //     }
  //   }
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     // 遍历第一行第一列进行判断，然后设置0
  //     if (matrix[i][0] === 0 || matrix[0][j] === 0) {
  //       matrix[i][j] = 0;
  //     }
  //   }
  // }
  // // 如果第一列有0
  // if (flagCol0) {
  //   for (let i = 0; i < m; i++) {
  //     matrix[i][0] = 0;
  //   }
  // }
  // // 如果第一行有0
  // if (flagRow0) {
  //   for (let j = 0; j < n; j++) {
  //     matrix[0][j] = 0;
  //   }
  // }

  /**
   * 官方三：使用一个标记变量
   * 166/166 cases passed (76 ms)
   * Your runtime beats 75.86 % of javascript submissions
   * Your memory usage beats 91.54 % of javascript submissions (43.7 MB)
   */
  const m = matrix.length, n = matrix[0].length;
  let flagCol0 = false; // 记录第一列是否包含0
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) { // 要先进行第一列是否包含0的判断
      flagCol0 = true;
    }
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        /**
         * 跟官方方法二一样，用第一行和第一列进行记录
         * 其中第一列的第一个元素就可以表示第一行是否包含0
         */
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  // 为了防止每一列的第一个元素被提前更新，我们需要从最后一行开始
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (flagCol0) {
      matrix[i][0] = 0;
    }
  }
};
// setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);
// @lc code=end

