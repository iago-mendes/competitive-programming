/**
* @param {number} x
* @return {number}
*/
function reverse(x) {
	if (x == 0)
		return 0
	
	const sign = x / Math.abs(x) // 1 or -1
	const digits = String(x * sign).split('')
	let reversed = ''

	for (let i = digits.length - 1; i >= 0; i--)
		reversed += digits[i]
	
	reversed = Number(reversed) * sign

	if (reversed < -(2**31) || reversed > (2**31) - 1)
		return 0
	
	return reversed
}

const rl = require('readline').createInterface({
	input: process.stdin
})

rl.question('', x => {
	const output = reverse(x)
	console.log(output)

	rl.close()
})
