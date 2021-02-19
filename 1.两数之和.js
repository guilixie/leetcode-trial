/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 1.暴力 
  // 时间复杂度：O(n^2)
  // 空间复杂度：O(1)
  var len = nums.length
  for(var i = 0; i < len - 1; i++) {
    for(var j = i + 1; j < len; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  // indexOf
  // 时间复杂度：O(n^2)
  // 空间复杂度：O(1)
  // var len = nums.length
  // for(var j = 0; j < len; j++) {
  //   var anotherOne = target - nums[j]
  //   var anotherIdx = nums.indexOf(anotherOne)
  //   if( anotherIdx !== -1&& anotherIdx !== j) {
  //       return [j, anotherIdx]
  //   }
  // }

  // 3. hash表
  // 时间复杂度：O(n)
  // 空间复杂度：O(n)
  // var map = new Map()
  // var len = nums.length
  // for(var i = 0; i < len; i++) {
  //     map.set(nums[i], i)
  // }
  // for(var j = 0; j < len; j++) {
  //     var anotherOne = target - nums[j]
  //     if(map.has(anotherOne) && map.get(anotherOne) !== j) {
  //         return [j, map.get(anotherOne) ]
  //     }
  // }
  // 3.
  // var map = {}
  // var len = nums.length
  // for(var i = 0; i < len; i++) {
  //     map[nums[i]] =  i
  // }
  // for(var j = 0; j < len; j++) {
  //     var anotherOne = target - nums[j]
  //     if(map[anotherOne] && map[anotherOne] !== j) {
  //         return [j, map[anotherOne] ]
  //     }
  // }

};
// @lc code=end

