const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question('', rawNumbers => {
	const numbers = rawNumbers.split(' ').map(n => Number(n))
	numbers.sort((a, b) => a - b)
	const [a, b, c] = numbers

	rl.question('', order => {
		let output = []

		for (let index in order) {
			const char = order[index]
			if (char === 'A') output.push(a)
			if (char === 'B') output.push(b)
			if (char === 'C') output.push(c)
		}

		console.log(output.join(' '))

		rl.close()
	})
})