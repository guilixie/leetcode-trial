/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
  // 1.递归写法
  // if(head == null || head.next == null) return head
  // let newHead = reverseList(head.next) // 新头，递归再次反转
  // head.next.next = head // 新头指向老头
  // head.next =  null // 老头指向null
  // return newHead

  // 2.尾递归优化,画图理解下
  // function doReverse (head, newHead) {
  //   if(head == null) return newHead
  //   let next = head.next 
  //   head.next = newHead
  //   return doReverse(next, head)
  // }
  // return doReverse(head, null)


  // 3.可以使用栈，相当于拆了老链表存栈里，然后新建一个链表
  // let stack = []
  // let current = head
  // // 链表的节点一个个放入栈中
  // while(current) {
  //   stack.push(current)
  //   current = current.next
  // }
  // // 开始反转
  // let newHead = null
  // let index = 0
  // // 栈里面一个个弹出来
  // while(current = stack[index++]) {
  //   current.next = newHead // 当前元素next指向原来新头指向的元素
  //   newHead = current // 新头指向当前元素
  // }
  // return newHead

  // 4.迭代法，思路就是重新来一个链表newHead，然后拆了老链表head
  if(head == null || head.next == null) return head
  let newHead = null // 新头
  while(head){
    const next = head.next // 先用一个指针指向head元素的下一个，以免改变指向后失去引用
    head.next = newHead // 老头next指向新头指向的元素（第一个是null）
    newHead = head // 新头指针移到老头head指向的（第一个是首个元素）
    head = next // 移动老头指针到下一个元素
  }
  return newHead
};
// @lc code=end

