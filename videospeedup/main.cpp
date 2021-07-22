#include <bits/stdc++.h>
using namespace std;

int n, p, k;
double T = 0.0, speed = 1.0;

int main() {
	cin >> n >> p >> k;

	int t[n + 2];
	t[0] = 0;
	t[n+1] = k;
	for (int i = 1; i <= n; i++)
		cin >> t[i];
	
	for (int i = 0; i < n+1; i++) {
		int startTime = t[i];
		int endTime = t[i+1];
		int interval = endTime - startTime;

		T += interval * speed;
		speed += p / 100.0;
	}

	cout << setprecision(6) << std::fixed << T << endl;

	return 0;
}