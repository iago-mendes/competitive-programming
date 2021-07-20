#include <bits/stdc++.h>
using namespace std;

class Element {
	public:
		int value;
		bool merged;
};

Element game[4][4];
int nextMove;

Element emptyElement;

void moveStep(Element element, int row, int col, int targetRow, int targetCol) {
	Element targetElement = game[targetRow][targetCol];

	if (targetElement.value == 0) {
		game[row][col] = emptyElement;
		game[targetRow][targetCol] = element;
	}
	else if (targetElement.value == element.value) {
		if (!element.merged && !targetElement.merged) {
			Element newElement;
			newElement.value = element.value + targetElement.value;
			newElement.merged = true;

			game[row][col] = emptyElement;
			game[targetRow][targetCol] = newElement;
		}
	}
}

void moveLeft(int i, int j) {
	Element element = game[i][j];

	for (int k = j; k > 0; k--)
		moveStep(element, i, k, i, k-1);
}

void moveUp(int i, int j) {
	Element element = game[i][j];

	for (int k = i; k > 0; k--)
		moveStep(element, k, j, k-1, j);
}

void moveRight(int i, int j) {
	Element element = game[i][j];

	for (int k = j; k < 4; k++)
		moveStep(element, i, k, i, k+1);
}

void moveDown(int i, int j) {
	Element element = game[i][j];

	for (int k = i; k < 4; k++)
		moveStep(element, k, j, k+1, j);
}

int main() {
	emptyElement.value = 0;
	emptyElement.merged = false;

	for (int i = 0; i < 4; i++)
	{
		for (int j = 0; j < 4; j++)
		{
			int value;
			cin >> value;

			game[i][j].value = value;
			game[i][j].merged = false;
		}
	}

	cin >> nextMove;

	for (int i = 0; i < 4; i++)
	{
		for (int j = 0; j < 4; j++)
		{
			switch (nextMove)
			{
				case 0:
					moveLeft(i, j);
					break;

				case 1:
					moveUp(i, j);
					break;

				case 2:
					moveRight(i, j);
					break;

				case 3:
					moveDown(i, j);
					break;
				
				default:
					break;
			}
		}
	}

	for (int i = 0; i < 4; i++)
	{
		for (int j = 0; j < 3; j++)
		{
			cout << game[i][j].value << " ";
		}

		cout << game[i][3].value << endl;
	}

	return 0;
}