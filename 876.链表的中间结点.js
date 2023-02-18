/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function (head) {
  /**
   * 1. 遍历链表，保存所有节点
   * 36/36 cases passed (64 ms)
   * Your runtime beats 35.9 % of javascript submissions
   * Your memory usage beats 21.76 % of javascript submissions (41.2 MB)
   */
  // let node = head;
  // const nodes = [];
  // while(node) {
  //   nodes.push(node);
  //   node = node.next;
  // }
  // return nodes[nodes.length >> 1]; // nodes.length >> 1 相当于 Math.floor(nodes.length / 2)

  /**
   * 2. 快慢指针（最优），慢指针每走一步，快指针就走两步
   * 36/36 cases passed (60 ms)
   * Your runtime beats 61.25 % of javascript submissions
   * Your memory usage beats 81.46 % of javascript submissions (41 MB)
   */
  // const dummyNode = new ListNode(); // 哑节点
  // dummyNode.next = head;
  // let slowPointer = dummyNode,
  //   fastPointer = dummyNode;
  // while (fastPointer) {
  //   /**
  //    * 假设0 -> 1 -> 2 -> 3 -> 4，0 是哑节点
  //    * 第一次循环结束后 slowPointer 指向 1，fastPointer 指向2
  //    * 第二次循环结束后 slowPointer 指向 2，fastPointer 指向4
  //    * 第三次循环，因为 4.next 不存在，按照题意，如果有两个中间结点，则返回第二个中间结点。
  //    * 所以将 slowPointer 指向 3，别忘记将 fastPointer 指向 4.next 以结束循环
  //    * 如果 4.next 存在，则 fastPointer 走两步，slowPointer 走一步
  //    */
  //   if (fastPointer.next) {
  //     fastPointer = fastPointer.next.next;
  //   } else {
  //     fastPointer = fastPointer.next;
  //   }
  //   slowPointer = slowPointer.next;
  // }
  // return slowPointer;

  // 快慢指针官方答案（牛）
  // let slow = head, fast = head;
  // while (fast && fast.next) {
  //   slow = slow.next;
  //   fast = fast.next.next;
  // }
  // return slow;

  /**
   * 3. 单指针法，其实就是将第一种方法的数组省略
   * 36/36 cases passed (56 ms)
   * Your runtime beats 81.71 % of javascript submissions
   * Your memory usage beats 80.84 % of javascript submissions (41 MB)
   */
  let node = head;
  let len = 0;
  while(node) {
    len++;
    node = node.next;
  }
  node = head;
  len = len >> 1;
  while(len > 0) {
    len--;
    node = node.next;
  }
  return node;
};
// @lc code=end
