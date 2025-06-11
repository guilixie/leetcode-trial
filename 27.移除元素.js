// 1.暴力 O(n^2) O(1)
var removeElement = function (nums, val) {
	let size = nums.length
	for (let i = 0; i < size; i++) {
		if (nums[i] === val) {
			// for (let j = i; j < size; j++) {
			//   nums[j] = nums[j+1]
			// }
			// OR
			for (let j = i + 1; j < size; j++) {
				nums[j - 1] = nums[j]
			}
			i--
			size--
		}
	}
	return size
}

// 2. 双指针
var removeElement1 = function (nums, val) {
	let size = nums.length
	let left = 0
	for (let right = 0; right < size; right++) {
		if (nums[right] !== val) {
			nums[left++] = nums[right]
		}
	}
	return left
}

// 2. 双指针 优化版
var removeElement2 = function (nums, val) {
	let left = 0
	let right = nums.length
	while (left < right) {
		if (nums[left] === val) {
			nums[left] = nums[right - 1]
			right--
		} else {
			left++
		}
	}
	return left
}
