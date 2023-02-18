/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
   * 1. 递归
   * 28/28 cases passed (60 ms)
   * Your runtime beats 83.97 % of javascript submissions
   * Your memory usage beats 17.4 % of javascript submissions (43.3 MB)
   */
  // 1. 出口
  // if (!head || !head.next) {
  //   return head;
  // }
  // // if (!head.next.next) {
  // //   const res = head.next;
  // //   head.next.next = head;
  // //   head.next = null;
  // //   return res;
  // // }
  // // 2. 规律
  // const res = reverseList(head.next);
  // head.next.next = head;
  // head.next = null;
  // return res;

  /**
   * 2. 迭代
   * 28/28 cases passed (60 ms)
   * Your runtime beats 83.97 % of javascript submissions
   * Your memory usage beats 56.59 % of javascript submissions (42.9 MB)
   */
  let p = head,
    next = null;
  pre = null; // 初始为null，即head.next为null
  while (p) {
    next = p.next; // 保留当前节点的下一节点
    p.next = pre; // 然后将当前节点的next指向前一个节点
    pre = p; // 更新前一个节点为当前节点
    p = next; // 更新当前节点为下一个节点
  }
  return pre;
};
// @lc code=end
