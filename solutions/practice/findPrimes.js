//find all prime numbers up to N

export default function primes(n) {
  let primes = Array(n + 1).fill(true, 2);
  let maxToCheck = Math.sqrt(n);
  for (let i = 2; i < maxToCheck; i++) {
    if (primes) {
      for (let multiple = i * i; multiple <= n; multiple += i) {
        primes[multiple] = false;
      }
    }
  }
  return primes
        .map((el, i) => {
          if (el) return i;
        })
        .filter(el => el);
}
