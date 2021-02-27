from sys import stdin

def isLower(guess):
	isGuessLower = True

	for lowGuess in lowGuesses:
		if (lowGuess >= guess):
			isGuessLower = False
	
	return isGuessLower

def isHigher(guess):
	isGuessHigher = True

	for highGuess in highGuesses:
		if (highGuess <= guess):
			isGuessHigher = False
	
	return isGuessHigher

lowGuesses = []
highGuesses = []

while True:
	guess = int(stdin.readline())
	if (guess == 0):
		break

	response = str(stdin.readline()).strip()

	if response == 'too low':
		lowGuesses.append(guess)
	elif response == 'too high':
		highGuesses.append(guess)
	elif response == 'right on':
		if isLower(guess) and isHigher(guess):
			print('Stan may be honest')
		else:
			print('Stan is dishonest')
		
		lowGuesses = []
		highGuesses = []