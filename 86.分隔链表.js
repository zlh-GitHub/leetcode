/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  /**
   * 168/168 cases passed (76 ms)
   * Your runtime beats 11.93 % of javascript submissions
   * Your memory usage beats 45.26 % of javascript submissions (42.6 MB)
   */
  const minDummyNode = new ListNode();
  const maxDummyNode = new ListNode();
  let minD = minDummyNode,
    maxD = maxDummyNode,
    h = head;
  while (h) {
    if (h.val < x) {
      minD.next = h;
      minD = minD.next;
    } else {
      maxD.next = h;
      maxD = maxD.next;
    }
    h = h.next;
  }
  /**
   * 因为最后 n 个节点可能是小于 x 的节点，那么 maxD.next
   * 就有可能指向了最后 n 个节点的头节点，所以要置空
   */
  maxD.next = null;
  minD.next = maxDummyNode.next;
  return minDummyNode.next;
};
// @lc code=end
