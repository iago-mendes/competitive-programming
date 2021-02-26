from sys import stdin

for line in stdin:
	a, b = [int(n) for n in line.split()]

	res = abs(a - b)
	print(res)