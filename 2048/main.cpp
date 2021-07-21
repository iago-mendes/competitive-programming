#include <bits/stdc++.h>
using namespace std;

int game[4][4];
int nextMove;

void moveLeft() {
	for (int i = 0; i <= 3; i++) {
		int location = -1, counter = 0;

		for (int j = 0; j <= 3; j++) {
			if (game[i][j] == 0) {
				counter++;
				if (counter == 1) location = j;
			}
			else if (game[i][j] != 0 && location != -1) {
				game[i][location] = game[i][j];
				game[i][j] = 0;
				location = j;
				counter = 0;
			}
		}

		for (int j = 0; j < 3; j++) {
			if (game[i][j] != 0 && game[i][j] == game[i][j + 1]) {
				game[i][j] = game[i][j] * 2;
				for (int k = j + 1; k < 3; k++) {
					game[i][k] = game[i][k + 1];
				}
				game[i][3] = 0;
			}
		}

   	}
}

void moveUp() {
	for (int j = 0; j <= 3; j++) {
		int location = -1, counter = 0;

		for (int i = 0; i <= 3; i++) {
			if (game[i][j] == 0) {
				counter++;
				if (counter == 1) location = i;
			}
			else if (game[i][j] != 0 && location != -1) {
				game[location][j] = game[i][j];
				game[i][j] = 0;
				location = i;
				counter = 0;
			}
		}

		for (int i = 0; i < 3; i++) {
			if (game[i][j] != 0 && game[i][j] == game[i + 1][j]) {
				game[i][j] = game[i][j] * 2;
				for (int k = i + 1; k < 3; k++) {
					game[k][j] = game[k + 1][j];
				}
				game[3][j] = 0;
			}
		}

   	}
}

void moveRight() {
	for (int i = 0; i <= 3; i++) {
		int location = -1, counter = 0;

		for (int j = 3; j >= 0; j--) {
			if (game[i][j] == 0) {
				counter++;
				if (counter == 1) location = j;
			}
			else if (game[i][j] != 0 && location != -1) {
				game[i][location] = game[i][j];
				game[i][j] = 0;
				location = j;
				counter = 0;
			}
		}

		for (int j = 3; j > 0; j--) {
			if (game[i][j] != 0 && game[i][j] == game[i][j - 1]) {
				game[i][j] = game[i][j] * 2;
				for (int k = j - 1; k > 0; k--) {
					game[i][k] = game[i][k - 1];
				}
				game[i][0] = 0;
			}
		}

   	}
	
}

void moveDown() {
	for (int j = 0; j <= 3; j++) {
		int location = -1, counter = 0;

		for (int i = 3; i >= 0; i--) {
			if (game[i][j] == 0) {
				counter++;
				if (counter == 1) location = i;
			}
			else if (game[i][j] != 0 && location != -1) {
				game[location][j] = game[i][j];
				game[i][j] = 0;
				location = i;
				counter = 0;
			}
		}

		for (int i = 3; i > 0; i--) {
			if (game[i][j] != 0 && game[i][j] == game[i - 1][j]) {
				game[i][j] = game[i][j] * 2;
				for (int k = i - 1; k > 0; k--) {
					game[k][j] = game[k - 1][j];
				}
				game[0][j] = 0;
			}
		}

	}

}

int main() {
	for (int i = 0; i <= 3; i++)
		for (int j = 0; j <= 3; j++)
			cin >> game[i][j];

	cin >> nextMove;

	switch (nextMove) {
		case 0:
			moveLeft();
			break;

		case 1:
			moveUp();
			break;

		case 2:
			moveRight();
			break;

		case 3:
			moveDown();
			break;
		
		default:
			break;
	}

	for (int i = 0; i <= 3; i++) {
		for (int j = 0; j < 3; j++)
			cout << game[i][j] << " ";

		cout << game[i][3] << endl;
	}

	return 0;
}