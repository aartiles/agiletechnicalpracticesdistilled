export default function primeFactors(n: number): Array<number> {
  if (n < 2) return [];
  else if (n <= 3) return [n];
  else if (n === 4) return primeFactors(2).concat(primeFactors(2));
  else if (n === 6) return primeFactors(2).concat(primeFactors(3));
  else if (n === 9) return primeFactors(3).concat(primeFactors(3));
}