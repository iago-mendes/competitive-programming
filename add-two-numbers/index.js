const rl = require('readline').createInterface({
	input: process.stdin
})

function ListNode(val, next) {
	const listNode = {}

	listNode.val = (val === undefined ? 0 : val)
	listNode.next = (next === undefined ? null : next)

	return listNode
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
	const l1Digits = getListDigits(l1)
	const l2Digits = getListDigits(l2)
	const sumDigits = []

	let pointer = 0
	let rest = 0

	const maxDigits = Math.max(l1Digits.length, l2Digits.length)
	while (pointer < maxDigits || rest != 0) {
		const l1Digit = pointer < l1Digits.length ? l1Digits[pointer] : 0
		const l2Digit = pointer < l2Digits.length ? l2Digits[pointer] : 0

		const tmpSum = l1Digit + l2Digit + rest
		rest = 0
		let sumDigit = 0

		if (tmpSum <= 9)
			sumDigit = tmpSum
		else {
			const roundBase = Math.floor(tmpSum / 10) * 10
			sumDigit = tmpSum - roundBase
			rest = roundBase / 10
		}

		sumDigits.push(sumDigit)
		pointer++
	}

	const sum = getList(sumDigits)
	return sum
}

/**
 * @param {ListNode} l
 * @return {number[]}
 */
function getListDigits(l) {
	let pointer = l
	let digits = []

	while (pointer != null) {
		digits.push(Number(pointer.val))
		pointer = pointer.next
	}

	return digits
}

/**
 * @param {number[]} digits
 * @return {ListNode}
 */
function getList(digits) {
	digits.reverse()
	let list = ListNode(digits[0])
	digits.slice(1).forEach(n => list = ListNode(n, list))

	return list
}

/**
 * @param {string} s
 * @return {ListNode}
 */
 function getInputList(s) {
	const digits = s
		.split('')
		.map(char => Number(char))
		.filter(n => !Number.isNaN(n))
	digits.reverse()

	let list = ListNode(digits[0])
	digits.slice(1).forEach(n => list = ListNode(n, list))

	return list
}


rl.question('', n1 => {
	const l1 = getInputList(n1)

	rl.question('', n2 => {
		const l2 = getInputList(n2)

		const res = addTwoNumbers(l1, l2)
		console.log(getListDigits(res))

		rl.close()
	})
})
