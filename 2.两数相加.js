/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 1.
  let carry = 0
  let head = null
  let tail = null
  let curNode = null
  let sum, v1, v2
  while(l1 || l2) {
    v1 = l1 ? l1.val : 0
    v2 = l2 ? l2.val : 0
    sum = v1 + v2 + carry
    curNode = new ListNode(sum % 10)
    if(!head) {
      head = tail = curNode
    } else {
      tail.next = curNode
      tail = tail.next
    }
    carry = ~~(sum / 10)
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  if(carry !== 0) {
    tail.next = new ListNode(carry)
  }
  return head
};
// @lc code=end

