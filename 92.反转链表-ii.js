/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
// const a2 = new ListNode(2);
// const a3 = new ListNode(3);
// const a4 = new ListNode(4);
// const a5 = new ListNode(5);

// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
// a4.next = a5;

// const b1 = new ListNode(1);
// const b2 = new ListNode(2);

// b1.next = b2;

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  /**
   * 1. 穿针引线
   * 先找到left和left的前一个节点pLeft和right和right的下一个节点nRight
   * 反转left-right，然后pLeft指向反转后的链表的头节点，原left节点指向nRight
   * 44/44 cases passed (68 ms)
   * Your runtime beats 19.79 % of javascript submissions
   * Your memory usage beats 89.82 % of javascript submissions (41.1 MB)
   */
  // if (left === right) {
  //   return head;
  // }
  // const dummyNode = new ListNode(-1);
  // dummyNode.next = head;
  // // 找出left的前一个节点和right节点
  // let preLeftNode = null,
  // rightNode = null,
  // index = 0,
  // h = dummyNode;
  // while(h) {
  //   if (left === (index + 1)) {
  //     preLeftNode = h;
  //   }
  //   if (right === index) {
  //     rightNode = h;
  //     break;
  //   }
  //   index++;
  //   h = h.next
  // }
  // // 截取链表
  // let leftNode = preLeftNode.next;
  // const nextRightNode = rightNode.next;

  // // 截断链表
  // rightNode.next = null;
  // preLeftNode.next = null;

  // // 反转
  // let next, pre = null, p = leftNode || head;
  // while(p) {
  //   next = p.next;
  //   p.next = pre;
  //   pre = p;
  //   p = next;
  // }
  // if (preLeftNode) {
  //   preLeftNode.next = pre;
  // }
  // if (leftNode) {
  //   leftNode.next = nextRightNode;
  // }
  // return dummyNode.next;

  /**
   * 2. 一次遍历「穿针引线」反转链表（头插法）(看官方图解，然后自己画步骤图理解，不然很绕)
   * 44/44 cases passed (64 ms)
   * Your runtime beats 43.1 % of javascript submissions
   * Your memory usage beats 34.26 % of javascript submissions (41.4 MB)
   */
  // if (left === right) {
  //   return head;
  // }
  // const dummyNode = new ListNode(-1);
  // dummyNode.next = head;
  // let cur = head,
  //   pre = dummyNode,
  //   next = head ? head.next : null,
  //   index = 1;

  // while (index < right) {
  //   if (index >= left) {
  //     cur.next = next.next;
  //     next.next = pre.next;
  //     pre.next = next;
  //     next = cur.next;
  //   } else {
  //     pre = cur;
  //     cur = next;
  //     next = next.next;
  //   }
  //   index++;
  // }
  // return dummyNode.next;

  /**
   * 3. 递归
   * 44/44 cases passed (56 ms)
   * Your runtime beats 86.88 % of javascript submissions
   * Your memory usage beats 98.76 % of javascript submissions (40.9 MB)
   */

  /**
   * 反转链表前 n 个节点
   * @param {ListNode} head
   * @param {Number} n
   * @return {ListNode}
   */
  const reverseN = (head, n) => {
    if (!head) {
      return head;
    }
    let lastNNode = null;
    const _reverseN = (head, n) => {
      if (n === 1) {
        // 说明递归到了第 n 个节点，然后把第 n + 1 的节点保存起来
        lastNNode = head.next;
        return head;
      }
      // 以 head.next 为起点，需要反转前 n - 1 个节点
      const last = _reverseN(head.next, n - 1);
      // 让头节点的下一个节点指向自己
      head.next.next = head;
      // 让反转之后的 head 节点和后面的节点（第 n + 1 个节点）连起来
      head.next = lastNNode;
      return last;
    }
    return _reverseN(head, n);
  };

  /**
   * 回到正题，反转 left 到 right 的节点
   * 运用 _reverseN ，让 left 节点变成头节点
   * @param {ListNode} head
   * @param {Number} left
   * @param {Number} right
   * @returns {ListNode}
   */
  const _reverseBetween = (head, left, right) => {
    if (left === 1) {
      return reverseN(head, right);
    }
    head.next = _reverseBetween(head.next, --left, --right);
    return head;
  };
  return _reverseBetween(head, left, right);
};
// reverseBetween(b1, 1, 2);
// @lc code=end
