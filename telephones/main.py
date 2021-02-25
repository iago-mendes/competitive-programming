while True:
	n, m = [int(i) for i in input().split()]
	if (n == m == 0):
		break

	calls = []
	
	for i in range(0, n):
		source, destination, start, duration = [int(j) for j in input().split()]

		seconds = []

		for second in range(start, start + duration):
			seconds.append(second)
		
		calls.append(seconds)

	for i in range(0, m):
		start, duration = [int(j) for j in input().split()]

		numberOfCalls = 0
		for call in calls:
			isActice = False

			for second in range(start, start + duration):
				if (second in call):
					isActice = True

			if (isActice):
				numberOfCalls += 1
		
		print(numberOfCalls)