# failed

from sys import stdin

class Dna:
	def __init__(self, string, position):
		self.string = string
		self.position = position
		self.edges = []

	def setEdge(self, dna):
		self.edges.append(dna)
	
	def getEdges(self):
		return self.edges

def calcEdgeWeight(string1, string2, size):
	weight = 0

	for i in range(0, size):
		if (string1[i] != string2[i]):
			weight += 1
	
	return weight

n, k = [int(i) for i in stdin.readline().split()]
dnaList = []

for i in range(0,n):
	string = str(stdin.readline())

	dna = Dna(string, i)
	dnaList.append(dna)

unlikeliness = 0
for currentDna in dnaList:
	bestDnaIndex = currentDna.position+1 if currentDna.position < n-1 else currentDna.position-1
	bestDna = dnaList[bestDnaIndex]
	bestDnaWeight = 100000

	for dna in dnaList[currentDna.position:]:
		tmpWeight = calcEdgeWeight(currentDna.string, dna.string, k)

		if (tmpWeight < bestDnaWeight and currentDna not in dna.edges):
			bestDna = dna
	
	currentDna.setEdge(bestDna)
	unlikeliness += bestDnaWeight

print(unlikeliness)

completedDnaStrings = []
for dna in dnaList:
	for edgeDna in dna.edges:
		if (edgeDna.string not in completedDnaStrings):
			print(f'{dna.position} {edgeDna.position}')
	
	completedDnaStrings.append(dna.string)