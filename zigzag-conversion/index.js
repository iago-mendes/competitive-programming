/**
* @param {string} s
* @param {number} numRows
* @return {string}
*/
function convert(s, numRows) {
	let pointers = []
	for (let index = 0; index < numRows; index++) {
		const pointer = new Pointer(numRows, index)
		pointers.push(pointer)
	}

	let newString = ''
	pointers.forEach(pointer => {
		let i = pointer.index
		while (i < s.length) {
			newString += s[i]
			i = pointer.next()
		}
	})

	return newString
}

class Pointer {
	constructor(numRows, initialIndex) {
		this.numRows = numRows
		this.row = initialIndex

		this.magicNumber = getMagicNumber(numRows)
		this.index = initialIndex
		this.lastStep = null
	}

	next() {
		const step = this.getNextStep()

		this.index += step
		this.lastStep = step

		return this.index
	}

	getNextStep() {
		if (this.row === 0 || this.row === this.numRows - 1)
			return this.magicNumber
		
		if (!this.lastStep)
			return this.magicNumber - 2 * this.row
		
		return this.magicNumber - this.lastStep
	}
}

/**
* @param {number} numRows
* @return {number}
*/
function getMagicNumber(numRows) {
	if (numRows < 2)
		return 1

	const magicNumber = 2 * numRows - 2
	return magicNumber
}

const rl = require('readline').createInterface({
	input: process.stdin
})

rl.question('', s => {
	rl.question('', numRows => {
		const output = convert(s, numRows)
		console.log(output)

		rl.close()
	})
})
