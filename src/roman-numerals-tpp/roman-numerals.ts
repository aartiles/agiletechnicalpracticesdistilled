
const BASE10 = ['I', 'X', 'C', 'M'];
const HALFBASE10 = ['V', 'L', 'D'];

export default function romanNumeral(n: number): string {
  if (isBase10(n)) return BASE10[Math.log10(n)];
  else if (isLike(5, n)) return HALFBASE10[Math.log10(n / 5)];
  else if (isLike(4, n)) return romanNumeral(n / 4) + romanNumeral((n + n / 4));
  else if (isLike(6, n)) return romanNumeral(5 * n / 6) + romanNumeral(n - 5 * n / 6);
  else if (isLike(7, n)) return romanNumeral(5 * n / 7) + romanNumeral(n - 5 * n / 7);
  else if (isLike(8, n)) return romanNumeral(5 * n / 8) + romanNumeral(n - 5 * n / 8);

  else if (isLike(9, n)) return romanNumeral(n / 9) + romanNumeral((n + n / 9));
  else if (n <= 3) return Array(n).fill('I').join('');


  else if (n > 10 && n < 40) return romanNumeral(10) + romanNumeral(n - 10);

  else if (n >= 50 && n < 90) return romanNumeral(50) + romanNumeral(n - 50);

  else if (n > 100) return romanNumeral(100) + romanNumeral(n - 100);

}

function isBase10(n: number): boolean {
  return Number.isInteger(Math.log10(n));
}

function isLike(like: number, n: number): boolean {
  return n % like === 0 && isBase10(n / like);
}

function isLikeRange(from: number, to: number, n: number): boolean {
  return 
}