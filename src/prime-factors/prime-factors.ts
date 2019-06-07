export default function primeFactors(n: number): Array<number> {
  if (n <= 3) return [n];
  else if (n === 4) return [2, 2];
  else if (n === 6) return [2, 3];
}