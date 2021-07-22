#include <bits/stdc++.h>
using namespace std;

stringstream stream;

void clearStream() {
	stream.str("");
}

string intToString(int intValue) {
	stream << intValue;
	string stringValue = stream.str();

	clearStream();
	return stringValue;
}

string formatResult(string oldValue) {
	string newValue = "";
	bool isZero = true;

	for (int i = 0; i < oldValue.length(); i++) {
		char digit = oldValue[i];

		if (digit != 'x') {
			newValue += digit;

			if (digit != '0') isZero = false;
		}
	}

	if (newValue == "") return "YODA";

	if (isZero == true) return "0";

	return newValue;
}

int main() {
	int n, m;
	cin >> n >> m;

	string nDigits = intToString(n);
	string mDigits = intToString(m);

	int nPointer = nDigits.length() - 1;
	int mPointer = mDigits.length() - 1;

	while (nPointer >= 0 || mPointer >= 0) {
		if (nPointer >= 0 && mPointer >= 0) {
			char nDigit = nDigits[nPointer];
			char mDigit = mDigits[mPointer];
			
			if (nDigit < mDigit) nDigits[nPointer] = 'x';
			else if (nDigit > mDigit) mDigits[mPointer] = 'x';
		}

		nPointer--;
		mPointer--;
	}

	string nNew = formatResult(nDigits);
	string mNew = formatResult(mDigits);

	cout << nNew << endl << mNew << endl;

	return 0;
}