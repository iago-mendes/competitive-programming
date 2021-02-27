from sys import stdin

class Branch:
	def __init__(self, a, b):
		self.a = a
		self.b = b

kittenBranch = int(stdin.readline())
path = []
branches = []

currentBranch = kittenBranch
path.append(currentBranch)

while (True):
	brachList = [int(i) for i in stdin.readline().split()]
	if (brachList[0] == -1):
		break

	branch = Branch(brachList[0], brachList[1:])
	branches.append(branch)

	if currentBranch in branch.b:
		path.append(branch.a)
		currentBranch = branch.a

solved = False
while (not solved):
	solved = True

	for branch in branches:
		if currentBranch in branch.b:
			path.append(branch.a)
			currentBranch = branch.a

			solved = False
			break

for branchPath in path:
	print(f'{branchPath} ', end='')