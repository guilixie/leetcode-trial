// 1. 暴力排序：每个数平方之后，排个序

// 2. 双指针：数组其实是有序的， 只不过负数平方之后可能成为最大数了。那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间。
// 思路1：如果我们能够找到数组 nums 中负数与非负数的分界线，那么就可以用类似「归并排序」的方法了
var sortedSquares = function (nums) {
	const n = nums.length
	let division = -1
	for (let i = 0; i < n; i++) {
		if (nums[i] < 0) {
			division = i
		} else {
			break
		}
	}

	const res = []

	let i = division,
		j = division + 1

	while (i >= 0 || j < n) {
		if (i < 0) {
			res.push(nums[j] * nums[j])
			j++
		} else if (j === n) {
			res.push(nums[i] * nums[i])
			i--
		} else if (nums[j] * nums[j] > nums[i] * nums[i]) {
			res.push(nums[i] * nums[i])
			i--
		} else {
			res.push(nums[j] * nums[j])
			j++
		}
	}

	return res
}
// 思路2: 数组平方的最大值就在数组的两端,双指针从平方最大值开始一个个找出来，倒着放入结果数组
var sortedSquares = function (nums) {
	const len = nums.length
	const result = new Array(len).fill(0)
	let i = 0,
		j = len - 1,
		k = len - 1
	while (i <= j) {
		if (nums[i] * nums[i] > nums[j] * nums[j]) {
			result[k] = nums[i] * nums[i]
			i++
		} else {
			result[k] = nums[j] * nums[j]
			j--
		}
		k--
	}
	return result
}
