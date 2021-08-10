/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
	let index1 = 0
	let index2 = 1
	
	nums.forEach((n1, i) =>
		nums.forEach((n2, j) => {
			if (n1 + n2 === target && i !== j) {
				index1 = i
				index2 = j
			}
		})
	)
	
	return [index1, index2]
}
