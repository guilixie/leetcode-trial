// 1.递归写法
function binarySearch(nums, target) {
	function doSearch(arr, result, left, right) {
		if (left <= right) {
			const mid = left + ((right - left) >> 1)
			if (arr[mid] > result) {
				return doSearch(arr, target, left, mid - 1)
			} else if (arr[mid] < result) {
				return doSearch(arr, target, mid + 1, right)
			} else {
				return mid
			}
		}
		return -1
	}
	return doSearch(nums, target, 0, nums.length - 1)
}

// 2.区间为左闭右开
function binarySearch2(nums, target) {
	let left = 0
	let right = nums.length // 区间为左闭右开
	let mid
	while (left < right) {
		// 防止大数溢出
		//1. mid = left + ~~((right - left) / 2)
		mid = left + ((right - left) >> 1)
		if (nums[mid] > target) {
			right = mid // 去左区间寻找
		} else if (nums[mid] < target) {
			left = mid + 1 // 去右区间寻找
		} else {
			return mid
		}
	}
	return -1
}

// 3. 区间为左闭右闭
function binarySearch3(nums, target) {
	let left = 0
	let right = nums.length - 1 // 区间为左闭右闭
	let mid
	while (left <= right) {
		// 防止大数溢出
		//1. mid = left + ~~((right - left) / 2)
		mid = left + ((right - left) >> 1)
		if (nums[mid] > target) {
			right = mid - 1 // 去左区间寻找
		} else if (nums[mid] < target) {
			left = mid + 1 // 去右区间寻找
		} else {
			return mid
		}
	}
	return -1
}
