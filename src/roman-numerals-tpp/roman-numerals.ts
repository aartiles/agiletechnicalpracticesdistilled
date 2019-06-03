
const BASE10 = ['I', 'X', 'C', 'M'];

export default function romanNumeral(n: number): string {
  if (n <= 3) return Array(n).fill('I').join('');
  else if (n === 4 || n == 9) return romanNumeral(1) + romanNumeral(n + 1);
  else if (n === 5) return 'V';
  else if (n > 5 && n < 9) return romanNumeral(5) + romanNumeral(n - 5);
  else if (isBase10(n)) return BASE10[Math.log10(n)];
  else if (n > 10 && n < 40) return romanNumeral(10) + romanNumeral(n - 10);
  else if (n === 40) return romanNumeral(n / 4) + romanNumeral((n + 10));
  else if (n === 50) return 'L';
  else if (n >= 60 && n < 90) return romanNumeral(50) + romanNumeral(n - 50);
  else if (n === 90) return romanNumeral(10) + romanNumeral(100);
  else if (n > 100) return romanNumeral(100) + romanNumeral(n - 100);;
}

function isBase10(n: number): boolean {
  return Number.isInteger(Math.log10(n));
}

