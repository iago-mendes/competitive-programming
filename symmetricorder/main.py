setNumber = 0

while (True):
	n = int(input())
	if n == 0:
		break

	topNames = []
	bottomNames = []

	for i in range(0,n):
		name = input()

		if i % 2 == 0:
			topNames.append(name)
		else:
			bottomNames.append(name)
	
	bottomNames.reverse()
	names = topNames + bottomNames

	setNumber += 1
	print(f'SET {setNumber}')

	for name in names:
		print(name)