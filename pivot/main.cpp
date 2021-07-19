#include <iostream>
#include <vector>
using namespace std;

int main() {
	int n;
	vector<int> a;

	cin >> n;
	for (int i = 0; i < n; i++)
	{
		int tmp;
		cin >> tmp;
		a.push_back(tmp);
	}

	int count = 0;

	for (int i = 0; i < a.size(); i++)
	{
		int pivot = a[i];
		bool isValid = true;

		for (int j = 0; j < a.size(); j++)
		{
			int element = a[j];

			bool isLeft = j < i;
			bool isRight = j > i;

			if ((isLeft && element > pivot) || (isRight && element < pivot))
				isValid = false;
		}

		if (isValid) count++;
	}

	cout << count << "\n";
	return 0;
}