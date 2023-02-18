/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  /**
   * 1. 哈希表map/哈希集合set，先记录其中一个链表的所有节点到 map 中
   * 然后再遍历另一个链表，判断在 map 中是否存在，存在则相交，否则不相交
   * 39/39 cases passed (80 ms)
   * Your runtime beats 87.32 % of javascript submissions
   * Your memory usage beats 15.29 % of javascript submissions (49.2 MB)
   */
  // const map = new Map();
  // let h = headA;
  // while (h) {
  //   map.set(h, true);
  //   h = h.next;
  // }

  // h = headB;
  // while (h) {
  //   if (map.get(h)) {
  //     return h;
  //   } else {
  //     h = h.next;
  //   }
  // }
  // return null;

  /**
   * 2. 双指针
   * 当链表 headA 和 headB 都不为空时，创建两个指针 pA 和 pB，初始时分别指向两个链表的头节点 headA 和 headB，
   * 然后将两个指针依次遍历两个链表的每个节点。具体做法如下：
   * * 每步操作需要同时更新指针 pA 和 pB。
   * * 如果指针 pA 不为空，则将指针 pA 移到下一个节点；如果指针 pB 不为空，则将指针 pB 移到下一个节点。
   * * 如果指针 pA 为空，则将指针 pA 移到链表 headB 的头节点；如果指针 pB 为空，则将指针 pB 移到链表 headA 的头节点。
   * * 当指针 pA 和 pB 指向同一个节点或者都为空时，返回它们指向的节点或者 null。
   * 即加入 headA 长 为5，headB 短 为4，一开始 pA 走了 5步，pB 走了 4步，pA 和 pB 相差 1步
   * 然后对调，pB走 5步，pA 走 4步，pB 将一开始相差的 1 步又补了回来，就回到了同一起跑线
   * 39/39 cases passed (72 ms)
   * Your runtime beats 98.09 % of javascript submissions
   * Your memory usage beats 78.09 % of javascript submissions (48.2 MB)
   */
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;

  /**
   * TODO
   * 3. 将其中一条链表的首尾相连进行判断，如果存在相交这样就变成了【142.环形链表-ii】的寻找环起点的解法
   * 但要注意的是，判断完后必须将首尾解开
   */

};
// @lc code=end
