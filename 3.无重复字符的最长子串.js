/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 暴力解法：所有字串,筛选掉有重复子串的
// 时间复杂度： O(n^3)
// 空间复杂度： O(m) m为ASCII码字符范围128
// 结果：超出时间限制...
var lengthOfLongestSubstring = function(s) {
  let len = s.length
  let maxLen = 0
  let item
  const occ = new Set()
  for(let i = 0; i < len; i++) {
    for(let j = i; j < len; j++) {
      // 当两个指针一起的时候，就是一位的肯定无重复啦
      if(i === j) {
        maxLen = Math.max(maxLen, 1)
      } else {
        item = s.slice(i, j+1)
        occ.clear()
        inner: for(let k = 0; k < item.length; k++) {
          // 利用hash set，判断是否含有重复字符，有就不符合直接跳出循环
          if(occ.has(item.charAt(k))) {
            break inner
          } else {
            occ.add(item.charAt(k))
            // 当子串遍历到最后，算出符合条件的最大子串长度
            if(k === item.length - 1) {
              maxLen = Math.max(maxLen, occ.size)
            }
          }
        }
      }
    }
  }
  console.log(maxLen)
  return maxLen
};
// 滑动窗口
// 时间复杂度： O(n)
// 空间复杂度： O(m) m为ASCII码字符范围128
var lengthOfLongestSubstring1 = function(s) {
  const n = s.length
  // 哈希集合，记录每个字符是否出现
  const occ = new Set()
  let right = -1, maxLen = 0
  for(let i = 0; i < n; i++) {
    if(i !== 0){
      occ.delete(s.charAt(i - 1))
    }
    while(right + 1 < n && !occ.has(s.charAt(right + 1))){
      occ.add(s.charAt(right + 1))
      right++
    }
    maxLen = Math.max(maxLen,right-i+1)
  }
  console.log(maxLen)
  return maxLen
};
lengthOfLongestSubstring1('')
lengthOfLongestSubstring1('ddddd')
lengthOfLongestSubstring1('asdfg')
lengthOfLongestSubstring1('asdfsg')
// @lc code=end

