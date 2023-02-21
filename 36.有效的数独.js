/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  /**
   * 我的解法
   * 507/507 cases passed (76 ms)
   * Your runtime beats 74.87 % of javascript submissions
   * Your memory usage beats 19.2 % of javascript submissions (46.7 MB)
   */
  const row = board.length;
  const col = board[0].length;
  let rows = []; // 这个保存当前遍历行的元素
  const cols = new Array(col).fill([]).map(() => []); // 保存每一列的元素
  const boxs = new Array(row * col).fill([]).map(() => []); // 是一个二维数据，里面的每个数组都装着第 i 个九宫格的所有数字
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const val = board[r][c];
      // 当前元素在boxs中的哪个盒子
      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (
        rows.includes(val) // 当前行存在两个相同的元素
        || cols[c].includes(val) // 当前列存在两个相同的元素
        || boxs[boxIndex].includes(val) // 当前盒子存在两个相同的元素
      ) {
        return false;
      } else if (val !== '.') {
        rows.push(val); // 保存当前行元素
        cols[c].push(val); // 保存当前列元素
        boxs[boxIndex].push(val); // 保存当前9宫格的元素
      }
    }
    rows = []; // 在遍历下一行的时候重置
  }
  return true;
};
// isValidSudoku([
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]]);
// @lc code=end

