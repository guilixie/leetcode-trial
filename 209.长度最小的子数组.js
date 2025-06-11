// 暴力解法，超出时间限制 O(n^2)
var minSubArrayLen = function (target, nums) {
	const len = nums.length
	let result
	let subLen = 0
	let sum = 0
	for (let i = 0; i < len; i++) {
		sum = 0
		for (let j = i; j < len; j++) {
			sum += nums[j]
			if (sum >= target) {
				subLen = j - i + 1
				if (typeof result === 'number') {
					result = result < subLen ? result : subLen
				} else {
					result = subLen
				}
				break
			}
		}
	}
	return typeof result === 'number' ? result : 0
}

// 前缀和 + 二分查找 O(nlogn) O(n) 抄的官方Java的题解，居然没通过，有点没搞明白
var minSubArrayLen = function (target, nums) {
	const len = nums.length
	if (len === 0) {
		return 0
	}
	let result = Infinity
	const sums = [0]
	// 为了方便计算，令 size = n + 1
	// sums[0] = 0 意味着前 0 个元素的前缀和为 0
	// sums[1] = A[0] 前 1 个元素的前缀和为 A[0]
	for (let i = 1; i <= len; i++) {
		sums[i] = sums[i - 1] + nums[i - 1]
	}
	for (let i = 1; i <= len; i++) {
		let t = target + sums[i - 1]
		let bound = binarySearch(sums, t)
		if (bound < 0) {
			bound = -bound - 1
		}
		if (bound <= len) {
			result = Math.min(result, bound - (i - 1))
		}
	}
	return result === Infinity ? 0 : result
}

function binarySearch(arr, target) {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		const mid = left + Math.floor((right - left) / 2)
		const midValue = arr[mid]

		if (midValue === target) {
			return mid // 找到目标，返回其索引
		} else if (midValue < target) {
			left = mid + 1 // 调整左边界
		} else {
			right = mid - 1 // 调整右边界
		}
	}

	return -1 // 未找到目标，返回-1
}

// 滑动窗口 O(n) O(1)
var minSubArrayLen1 = function (target, nums) {
	const len = nums.length
	let result = Infinity
	let start = 0,
		end = 0,
		sum = 0
	while (end < len) {
		sum += nums[end]
		while (sum >= target) {
			result = Math.min(result, end - start + 1)
			sum -= nums[start]
			start++
		}
		end++
	}
	return result === Infinity ? 0 : result
}
