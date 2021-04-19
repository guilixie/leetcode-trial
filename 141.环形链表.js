/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(head === null || head.next === null) {
    return false
  }

  // 0.hashmap
  // let current = head
  // let map = new WeakMap()
  // while(current) {
  //   if(map.get(current)) {
  //     return true
  //   } else {
  //     map.set(current, true)
  //   }
  //   current = current.next
  // }
  // return false
  
  // 1.快慢指针
  let slow = head
  let fast = head.next
  while(slow !== fast) {
    if(fast === null || fast.next === null) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true

  // 2.打标记
  // let current = head
  // while(current) {
  //   if(current.visited) {
  //     return true
  //   }
  //   current.visited = true
  //   current = current.next
  // }
  // return false

  // 3.利用执行次数
  // let count = 0
  // const size = 100000
  // let current = head
  // while(current) {
  //   current = current.next
  //   if(++count >= size) {
  //     return true
  //   }
  // }
  // return false

  // 4.JSON.stringify
  // try {
  //   JSON.stringify(head)
  // } catch{
  //   return true
  // }
  // return false
};
// @lc code=end

