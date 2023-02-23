/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  /**
   * 二叉树的前序遍历：按照访问根节点——左子树——右子树的方式遍历这棵树，
   * 而在访问左子树或者右子树的时候，我们按照同样的方式遍历，直到遍历完整棵树。
   */
  /**
   * 递归
   * 70/70 cases passed (64 ms)
   * Your runtime beats 41.89 % of javascript submissions
   * Your memory usage beats 13.09 % of javascript submissions (41.4 MB)
   */
  // if (!root) {
  //   return [];
  // }
  // const res = [];
  // const _preorderTraversal = root => {
  //   if (!root) {
  //     return;
  //   }
  //   res.push(root.val);
  //   _preorderTraversal(root.left);
  //   _preorderTraversal(root.right);
  // }
  // _preorderTraversal(root);
  // return res;

  /**
   * 官方方法二：迭代（本质上是在模拟递归，因为在递归的过程中使用了系统栈，所以在迭代的解法中常用 Stack 来模拟系统栈）
   * 首先我们应该创建一个 Stack 用来存放节点，首先我们想要打印根节点的数据，
   * 此时 Stack 里面的内容为空，所以我们优先将头结点加入 Stack，然后打印。
   * 之后我们应该先打印左子树，然后右子树。所以先加入 Stack 的就是右子树，然后左子树。
   * 70/70 cases passed (60 ms)
   * Your runtime beats 66.93 % of javascript submissions
   * Your memory usage beats 30.03 % of javascript submissions (41.3 MB)
   */
  // if (!root) {
  //   return [];
  // }
  // const res = [];
  // const stack = [root];
  // while(stack.length) {
  //   const node = stack.pop();
  //   res.push(node.val);
  //   node.right && stack.push(node.right);
  //   node.left && stack.push(node.left);
  // }
  // return res;

  /**
   * 官方方法三：Morris遍历 TODO
   */
};
// @lc code=end

