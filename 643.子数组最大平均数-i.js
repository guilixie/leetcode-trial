/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  // 1.preSum sum(i, j) = preSum[j + 1] - preSum[i]
  // 112 ms	49 MB
  const preSum = [0]
  for(let i = 0; i < nums.length; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }
  let maxSum, sum
  for(let i = k; i <= nums.length; i++) {
    sum = preSum[i] - preSum[i - k]
    maxSum = maxSum ? Math.max(maxSum, sum) : sum
  }
  return maxSum / k

  // 2.滑动窗口 sum(i)=sum(i−1)−nums[i−k]+nums[i]
  // 96 ms	46.5 MB
  // var len = nums.length
  // var sum = 0
  // var i = 0
  // for(i = 0; i< k;i++) {
  //     sum+=nums[i]
  // }
  // var maxSum = sum
  // for(i = k; i < len; i++) {
  //     sum = sum - nums[i - k] + nums[i]
  //     maxSum = Math.max(maxSum, sum)
  // }
  // return maxSum / k

  // while
  // let sum = 0
  // let i = 0
  // while(i < k) {
  //     sum += nums[i++]
  // }
  // let maxSum = sum
  // i = k
  // while (i < nums.length) {
  //     sum = sum+nums[i]-nums[i-k]
  //     maxSum = Math.max(maxSum, sum)
  //     i++
  // }
  // return maxSum / k
};
// @lc code=end

