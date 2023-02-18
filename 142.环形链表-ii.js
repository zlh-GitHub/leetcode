/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  /**
   * 1. 哈希表/哈希集合
   * 17/17 cases passed (88 ms)
   * Your runtime beats 11.91 % of javascript submissions
   * Your memory usage beats 27.72 % of javascript submissions (43.9 MB)
   */
  // const set = new Set();
  // let h = head;
  // while(h) {
  //   if (set.has(h)) {
  //     return h;
  //   }
  //   set.add(h);
  //   h = h.next;
  // }
  // return null;

  /**
   * 2. 快慢指针，慢指针走一步，快指针走两步
   * 设链表中环外部分的长度为 a，慢指针在环内走了 b 的距离后与快指针相遇，环剩下距离为 c（即环总长 - b）
   * 当快慢指针相遇的时候，假设快指针走了 n 圈环，快指针总共走了 a + n * (b + c) + b，
   * 因为快指针速度是慢指针的两倍，所以 a + n * (b + c) + b = 2 * (a + b)
   * 换算得知 a === c
   * 所以当快慢指针相遇后，将慢指针重新只想头节点，然后快指针减慢速度为走一步，当两个指针再次相遇时
   * 便为环的起点
   */
  let slowPointer = head;
  let fastPointer = head;
  while (slowPointer && fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer) {
      break;
    }
  }
  if (!(slowPointer && fastPointer && fastPointer.next)) {
    return null;
  }
  slowPointer = head;
  while (slowPointer && fastPointer) {
    if (slowPointer === fastPointer) {
      return slowPointer;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }
};
// @lc code=end
