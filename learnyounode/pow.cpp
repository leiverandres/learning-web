#include <bits/stdc++.h>

using namespace std;

unsigned long long pow_fast(unsigned long long base, unsigned long long exp){
  unsigned long long temp;

  if(exp == 0) return 1;
  temp = pow_fast(base, exp / 2);
  temp = temp*temp;
  if(exp % 2 == 1) temp *= base;
  return temp;
}

void solve(long l, long r, long k) {
  // unsigned long long i = 0;
  // aux = pow_fast(k, i++);
  // while (aux < l) {
  //   aux = pow_fast(k, i++);
  // }
  // if(aux < r)cout << aux " ";
  // aux = pow_fast(k, i++);
  // while (aux <= r) {
  //   cout << aux " ";
  //   aux = pow_fast(k, i++);
  // }
  for (long long i = ceil(log(l) / log(k)); i <= floor(log(r) / log(k)); i++) {
    cout << pow_fast(k, i) << " ";
  }
}
int main() {
  long l, r, k;
  cin >> l >> r >> k;
  solve(l, r, k)
  return 0;
}
