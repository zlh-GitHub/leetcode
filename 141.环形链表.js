/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  /**
   * 1. 哈希表
   * 23/23 cases passed (76 ms)
   * Your runtime beats 49.66 % of javascript submissions
   * Your memory usage beats 21.75 % of javascript submissions (44.1 MB)
   */
  // const set = new Set();
  // let h = head;
  // while (h) {
  //   if (set.has(h)) { // 节点已存在，说明存在环
  //     return true;
  //   }
  //   set.add(h);
  //   h = h.next;
  // }
  // return false;

  /**
   * 2. 快慢指针
   * 23/23 cases passed (72 ms)
   * Your runtime beats 71.01 % of javascript submissions
   * Your memory usage beats 41.07 % of javascript submissions (43.8 MB)
   */
  let slowPointer = head,
    fastPointer = head?.next; // 细节，如果都是指向head的话，一开始就返回true了
  while (slowPointer && fastPointer && fastPointer.next) {
    if (slowPointer === fastPointer) {
      return true;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return false;
};
// @lc code=end
