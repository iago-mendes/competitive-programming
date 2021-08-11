/**
* @param {string} s
* @return {string}
*/
function longestPalindrome(s) {
	let longest = ''

	for (let start = 0; start < s.length; start++) {
		let substring = ''
		let tmpLongest = ''

		for (let pointer = start; pointer < s.length; pointer++) {
			substring += s[pointer]

			if (isPalindrome(substring))
				tmpLongest = substring
		}

		if (tmpLongest.length > longest.length)
			longest = tmpLongest
	}

	return longest
}

/**
* @param {string} s
* @return {boolean}
*/
function isPalindrome(s) {
	let p1 = 0
	let p2 = s.length - 1

	let ans = true

	while (p1 <= p2) {
		if (s[p1] !== s[p2]) {
			ans = false
			break
		}
		
		p1++
		p2--
	}

	return ans
}

const rl = require('readline').createInterface({
	input: process.stdin
})

rl.question('', s => {
	const output = longestPalindrome(s)
	console.log(output)

	rl.close()
})
