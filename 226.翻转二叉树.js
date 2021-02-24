/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root == null) return root
  // 1. 递归写法
  // let left = invertTree(root.left)
  // let right = invertTree(root.right)
  // root.left = right
  // root.right = left
  // return root

  // 2.层序遍历，然后翻转
  let stack = [ root ]
  let index = 0
  let current = null
  while(current = stack[index++]) {
    // 翻转
    let tmp = current.left
    current.left = current.right
    current.right = tmp
    // 分别添加到栈里
    if(current.left){
      stack.push(current.left)
    }
    if(current.right){
      stack.push(current.right)
    }
  }
  stack = null
  return root
};
// @lc code=end

