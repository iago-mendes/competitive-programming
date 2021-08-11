const rl = require('readline').createInterface({
	input: process.stdin
})

/**
* @param {string} s
* @return {number}
*/
function lengthOfLongestSubstring(s) {
	let longestLength = 0
	let characters = {} // {[char: string]: boolean | undefined}

	if (s.length <= 0)
		return 0

	for (let start = 0; start < s.length; start++) {
		for (let pointer = start; pointer < s.length; pointer++) {
			const char = s[pointer]

			if (characters[char])
				break

			characters[char] = true
		}
		
		const tmpLength = Object.keys(characters).length
		if (tmpLength > longestLength)
		longestLength = tmpLength

		characters = {}
	}

	return longestLength
}

rl.question('', s => {
	const output = lengthOfLongestSubstring(s)
	console.log(output)

	rl.close()
})