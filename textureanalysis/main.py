from sys import stdin

lineNumber = 1

while True:
	line = str(stdin.readline()).strip()
	if (line == 'END'):
		break

	whiteGroups = line.split('*')
	whiteGroups.pop(0)
	whiteGroups.pop()

	patterns = []
	for whiteGroup in whiteGroups:
		if whiteGroup not in patterns:
			patterns.append(whiteGroup)
	
	response = 'EVEN' if len(patterns) <= 1 else 'NOT EVEN'
	print(f'{lineNumber} {response}')

	lineNumber += 1