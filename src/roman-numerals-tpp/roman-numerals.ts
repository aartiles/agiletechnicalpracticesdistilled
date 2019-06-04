
const BASE10 = ['I', 'X', 'C', 'M'];
const HALFBASE10 = ['V', 'L', 'D'];

export default function romanNumeral(n: number): string {
  if (n === 0) return '';
  else if (isBase10(n)) return BASE10[Math.log10(n)];
  else if (isLike(5, n)) return HALFBASE10[Math.log10(n / 5)];
  else if (isLike(2, n)) return romanNumeral(n / 2) + romanNumeral(n - n / 2);
  else if (isLike(3, n)) return romanNumeral(n / 3) + romanNumeral(n - n / 3);
  else if (isLike(4, n)) return romanNumeral(n / 4) + romanNumeral((n + n / 4));
  else if (isLike(6, n)) return romanNumeral(5 * n / 6) + romanNumeral(n - 5 * n / 6);
  else if (isLike(7, n)) return romanNumeral(5 * n / 7) + romanNumeral(n - 5 * n / 7);
  else if (isLike(8, n)) return romanNumeral(5 * n / 8) + romanNumeral(n - 5 * n / 8);
  else if (isLike(9, n)) return romanNumeral(n / 9) + romanNumeral((n + n / 9));
  else return romanNumeral(Math.floor(n / 1000) * 1000) +
    romanNumeral(Math.floor(n / 100) * 100) +
    romanNumeral(Math.floor(n / 10) * 10 - Math.floor(n / 100) * 100) + // 840
    romanNumeral(n % 10);
}

function isBase10(n: number): boolean {
  return Number.isInteger(Math.log10(n));
}

function isLike(like: number, n: number): boolean {
  return n % like === 0 && isBase10(n / like);
}