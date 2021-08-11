const rl = require('readline').createInterface({
	input: process.stdin
})

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
function findMedianSortedArrays(nums1, nums2) {
	const mergedNums = []

	let p1 = 0, p2 = 0
	while (p1 < nums1.length || p2 < nums2.length) {
		if (p1 >= nums1.length) {
			mergedNums.push(nums2[p2])
			p2++
		}
		else if (p2 >= nums2.length) {
			mergedNums.push(nums1[p1])
			p1++
		}
		else {
			const num1 = nums1[p1]
			const num2 = nums2[p2]

			if (num1 <= num2) {
				mergedNums.push(num1)
				p1++
			}
			else {
				mergedNums.push(num2)
				p2++
			}
		}
	}

	const median = findMedianSortedArray(mergedNums)

	return median.toFixed(5)
}

/**
* @param {number[]} nums
* @return {number}
*/
function findMedianSortedArray(nums) {
	let median = 0

	if (nums.length <= 0)
		return 0

	if (nums.length % 2 !== 0) { // odd
		const index = Math.ceil(nums.length / 2) - 1
		median = nums[index]
	}
	else { // even
		const index1 = nums.length / 2 - 1
		const index2 = index1 + 1

		median = (nums[index1] + nums[index2]) / 2
	}

	return median
}

rl.question('', n1 => {
	const nums1 = n1
		.split('')
		.map(n => Number(n))
		.filter(n => !Number.isNaN(n))
	
	rl.question('', n2 => {
		const nums2 = n2
			.split('')
			.map(n => Number(n))
			.filter(n => !Number.isNaN(n))
		
		const output = findMedianSortedArrays(nums1, nums2)
		console.log(output)

		rl.close()
	})
})
