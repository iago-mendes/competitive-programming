while (True):
	n = int(input())
	if (n == -1):
		break

	elapsedTime = 0
	distance = 0

	for i in range(0, n):
		s, t = [int(i) for i in input().split()]

		distance += s * (t - elapsedTime)
		elapsedTime = t
	
	print(f'{distance} miles')