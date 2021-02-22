class Vertice:
	def __init__(self, x, y):
		self.x = x
		self.y = y

def crossProduct(a, b):
	return a.x * b.y - a.y * b.x

while (True):
	n = int(input())
	if (n == 0):
		break

	vertices = [] # type: ignore

	for i in range(0, n):
		x, y = [int(j) for j in input().split()]
		vertice = Vertice(x, y)
		vertices.append(vertice)

	sum = 0.0
	for i in range(0, n):
		a = vertices[i]
		b = vertices[0] if i == n-1 else vertices[i+1]

		sum += crossProduct(a, b)

	A = abs(sum) / 2.0
	D = 'CCW' if sum > 0 else 'CW'

	print(f'{D} {A:.1f}')