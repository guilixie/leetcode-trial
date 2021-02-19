/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 暴力解法：超出时间限制，时间复杂度O(n^3)
// var countSubstrings = function(s) {
//   var len = s.length
//   var i = j = 0
//   var sub = ''
//   var count = 0
//   while(i < len) {
//     while(j < len) {
//       sub = s.slice(i, j+1)
//       if(sub === sub.split('').reverse().join('')) {
//         count++
//       }
//       j++
//     }
//     j = ++i
//   }
//   return count
// };

// 中心扩展
var countSubstrings = function(s) {
  
};
// @lc code=end

console.log(countSubstrings('abc'))
console.log(countSubstrings('aaa'))
console.log(countSubstrings('ababab'))