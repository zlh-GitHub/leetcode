/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /**
   * 1. 先把所有节点保存在一个数组中，然后取出倒数第 n - 1 个节点，进而删除倒数第 n 个节点
   * 208/208 cases passed (60 ms)
   * Your runtime beats 78.77 % of javascript submissions
   * Your memory usage beats 6.51 % of javascript submissions (42.5 MB)
   */
  let node = head;
  const arr = [node];
  while (node.next) {
    arr.push(node.next);
    node = node.next;
  }
  const len = arr.length;
  if (arr[len - n - 1]) {
    // 也可以用出栈的方式
    arr[len - n - 1].next = arr[len - n + 1] || null;
  } else {
    // 链表可能只有两个节点也可能只有一个节点
    return head.next;
  }
  return head;

  /**
   * 2. 双指针（官方解法3）
   * 声明两个链表 L1 和 L2，L1 先走 n 步，接着 L2 陪 L1 走完剩下的路，走完后 L2 便走到了倒数第 n 个位置
   * 这种双指针又有点像移动窗口
   * 208/208 cases passed (68 ms)
   * Your runtime beats 35.17 % of javascript submissions
   * Your memory usage beats 61.33 % of javascript submissions (41.6 MB)
   */
  // const dummyNode = new ListNode(); // 哑节点
  // dummyNode.next = head;

  // let l1 = dummyNode,
  //   l2 = dummyNode;

  // for (let i = 0; i < n; i++) {
  //   l1 = l1.next;
  // }

  // while (l1.next) {
  //   l1 = l1.next;
  //   l2 = l2.next;
  // }

  // l2.next = l2.next.next; // 因为添加了哑节点，所以这时候 l2 就是倒数第 n + 1 的节点，l2.next 就是倒数第 n 个节点
  // return dummyNode.next;
};
// @lc code=end
