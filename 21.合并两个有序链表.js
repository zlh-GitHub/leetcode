/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  /**
   * 1. 遍历
   * 208/208 cases passed (60 ms)
   * Your runtime beats 92.87 % of javascript submissions
   * Your memory usage beats 64.55 % of javascript submissions (43.1 MB)
   */
  // const dummyNode = new ListNode();
  // let p1 = list1,
  // p2 = list2
  // d = dummyNode;
  // while(p1 && p2) {
  //   if (p1.val > p2.val) {
  //     d.next = p2;
  //     p2 = p2.next;
  //   } else {
  //     d.next = p1;
  //     p1 = p1.next;
  //   }
  //   d = d.next;
  // }
  // if (p1) {
  //   d.next = p1;
  // } else {
  //   d.next = p2;
  // }
  // return dummyNode.next;

  /**
   * 2. 递归
   * 208/208 cases passed (84 ms)
   * Your runtime beats 7.5 % of javascript submissions
   * Your memory usage beats 25.28 % of javascript submissions (43.5 MB)
   */
  if (!list1 && !list2) {
    return null;
  }
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
// @lc code=end
