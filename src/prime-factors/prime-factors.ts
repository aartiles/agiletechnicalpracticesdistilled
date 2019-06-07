export default function primeFactors(n: number): Array<number> {
  const factor = nextFactor(n);
  if (factor === 0) return [];
  else if (factor === 1) return [n];
  else return primeFactors(n / factor).concat(primeFactors(factor));
}

function nextFactor(n: number): number {
  let factor = Math.floor(n / 2);
  while (factor > 1 && n % factor !== 0) factor--;
  return factor;
}