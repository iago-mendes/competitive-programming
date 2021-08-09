const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let statues = 1
let printers = 1
let days = 1

rl.question('', n => {
	statues = Number(n)

	while (printers < statues) {
		printers *= 2
		days++
	}

	console.log(days)
	rl.close()
})