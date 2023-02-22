/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  /**
   * 迭代（类似203.移除链表元素的迭代解法）
   * 166/166 cases passed (64 ms)
   * Your runtime beats 88.49 % of javascript submissions
   * Your memory usage beats 97.26 % of javascript submissions (42.9 MB)
   */
  // const dummyNode = new ListNode();
  // dummyNode.next = head;
  // let d = dummyNode.next;
  // while(d && d.next) {
  //   if (d.val === d.next.val) {
  //     d.next = d.next.next;
  //   } else {
  //     d = d.next;
  //   }
  // }
  // return dummyNode.next;

  /**
   * 递归（类似203.移除链表元素的迭代解法）
   * 166/166 cases passed (64 ms)
   * Your runtime beats 88.49 % of javascript submissions
   * Your memory usage beats 98.01 % of javascript submissions (42.8 MB)
   */
  if (!head || !head.next) {
    return head;
  }
  head.next = deleteDuplicates(head.next);
  return head.val === head.next.val ? head.next : head;
};
// @lc code=end

