/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * 22/22 cases passed (60 ms)
 * Your runtime beats 60.13 % of javascript submissions
 * Your memory usage beats 29.7 % of javascript submissions (41.1 MB)
 */
// var MyQueue = function() {
//   this.data = [];
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//   this.data.push(x);
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//   return this.data.shift();
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//   return this.data[0];
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//   return this.data.length === 0;
// };

// Tips：上面的解答不符合要求，题意是：只能使用数组的 push 和 pop 方法

/**
 * 22/22 cases passed (60 ms)
 * Your runtime beats 60.13 % of javascript submissions
 * Your memory usage beats 94.55 % of javascript submissions (40.9 MB)
 */
var MyQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.outStack.length) {
    this.in2Out();
  }
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.outStack.length) {
    this.in2Out();
  }
  return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.outStack.length === 0 && this.inStack.length === 0;
};

MyQueue.prototype.in2Out = function() {
  while(this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

