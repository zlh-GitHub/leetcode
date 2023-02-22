/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  /**
   * 迭代 1
   * 新建一个链表记录不等于 val 的节点
   * 注意，最后 d.next = null
   * 66/66 cases passed (88 ms)
   * Your runtime beats 11.41 % of javascript submissions
   * Your memory usage beats 77.23 % of javascript submissions (45.4 MB)
   */
  // if (!head) {
  //   return head;
  // }
  // const dummyNode = new ListNode();
  // let h = head, d = dummyNode;
  // while(h) {
  //   if (h.val !== val) {
  //     d.next = h;
  //     d = d.next;
  //   }
  //   h = h.next;
  // }
  // d.next = null; // 重点
  // return dummyNode.next;

  /**
   * 迭代2：最优
   * 66/66 cases passed (72 ms)
   * Your runtime beats 83.44 % of javascript submissions
   * Your memory usage beats 93.08 % of javascript submissions (45.1 MB)
   */
  if (!head) {
    return head;
  }
  const dummyNode = new ListNode();
  dummyNode.next = head;
  let d = dummyNode;
  while(d && d.next) {
    if (d.next.val === val) {
      // 注意：此时不应将 d 赋值为 d.next，因为 d.next.value 还没有判断
      d.next = d.next.next;
    } else {
      d = d.next;
    }
  }
  return dummyNode.next;

  /**
   * 递归
   * 66/66 cases passed (72 ms)
   * Your runtime beats 83.44 % of javascript submissions
   * Your memory usage beats 5.15 % of javascript submissions (46.4 MB)
   */
  // // 出口
  // if(!head) {
  //   return head;
  // }
  // if (head.val === val) {
  //   return removeElements(head.next, val);
  // }
  // // 规律
  // head.next = removeElements(head.next, val);
  // return head;?

  /**
   * 递归2
   */
  // // 出口
  // if(!head) {
  //   return head;
  // }
  // // 规律
  // head.next = removeElements(head.next, val);
  // return head.val === val ? head.next : head;
};
// @lc code=end

