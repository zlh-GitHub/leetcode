/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

// const a1 = new ListNode(1);
// const a4 = new ListNode(4);
// const a5 = new ListNode(5);
// a1.next = a4;
// a4.next = a5;

// const b1 = new ListNode(1);
// const b3 = new ListNode(3);
// const b4 = new ListNode(4);
// b1.next = b3;
// b3.next = b4;

// const c2 = new ListNode(2);
// const c6 = new ListNode(6);
// c2.next = c6;

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  /**
   * 1. 遍历，每次合并两条（顺序合并）
   * 133/133 cases passed (272 ms)
   * Your runtime beats 19.73 % of javascript submissions
   * Your memory usage beats 92.04 % of javascript submissions (45.7 MB)
   */
  // const len = lists.length;
  // if (!lists || !len) {
  //   return null;
  // }
  // let res = lists[0];
  // for (let i = 1; i < len; i++) {
  //     const dummyNode = new ListNode();
  //     let p1 = res,
  //       p2 = lists[i],
  //       d = dummyNode;
  //     while (p1 && p2) {
  //       if (p1.val > p2.val) {
  //         d.next = p2;
  //         p2 = p2.next;
  //       } else {
  //         d.next = p1;
  //         p1 = p1.next;
  //       }
  //       d = d.next;
  //     }
  //     d.next = p1 ? p1 : p2;
  //     res = dummyNode.next;
  // }
  // return res;

  /**
   * 2. 分治合并
   * 将 k 个链表"配对"并将同一对中的链表合并，
   * 第一轮合并以后，k 个链表被合并成了 k/2 个链表，以此类推
   * 133/133 cases passed (80 ms)
   * Your runtime beats 91.03 % of javascript submissions
   * Your memory usage beats 55.74 % of javascript submissions (46.2 MB)
   */
  // const mergeTwoLists = (list1, list2) => {
  //   if (!list1 && !list2) {
  //     return null;
  //   }
  //   const dummyNode = new ListNode();
  //   let p1 = list1,
  //     p2 = list2
  //   d = dummyNode;
  //   while (p1 && p2) {
  //     if (p1.val > p2.val) {
  //       d.next = p2;
  //       p2 = p2.next;
  //     } else {
  //       d.next = p1;
  //       p1 = p1.next;
  //     }
  //     d = d.next;
  //   }
  //   d.next = p1 ? p1 : p2;
  //   return dummyNode.next;
  // }

  // const _mergeKLists = (list, start, end) => {
  //   // 出口
  //   if (start === end) { // 注意⚠️，这里表示start和end都能取到链表，所以索引都要有效，并且不能重复
  //     return list[start];
  //   }
  //   if (start > end) {
  //     return null;
  //   }
  //   // 规律
  //   const mid = (start + end) >> 1;
  //   return mergeTwoLists(
  //     _mergeKLists(list, start, mid),
  //     _mergeKLists(list, mid + 1, end), // 注意⚠️
  //   );
  // }

  // const len = lists.length;

  // if (!lists || !len) {
  //   return null;
  // }

  // return _mergeKLists(lists, 0, len - 1); // 注意⚠️

  /**
   * 3. 使用优先队列合并
   * 133/133 cases passed (1044 ms)
   * Your runtime beats 5.02 % of javascript submissions
   * Your memory usage beats 13.64 % of javascript submissions (49 MB)
   */
  const len = lists.length;
  if (!lists || !len) {
    return null;
  }
  if (len === 1) {
    return lists[0];
  }
  // 递增
  let pointers = [...lists].filter((i) => i).sort((a, b) => a.val - b.val);
  const dummyNode = new ListNode();
  let d = dummyNode;
  let pointersLen;
  while ((pointersLen = pointers.length)) {
    let p = pointers[0];
    d.next = p;
    d = d.next;
    if (!p.next) {
      pointers.splice(0, 1);
    } else {
      pointers[0] = p.next;
    }
    pointers.sort((a, b) => a.val - b.val);
  }
  return dummyNode.next;
};
// @lc code=end
