
export default function romanNumeral(n: number): string {
  if (n <= 3) return Array(n).fill('I').join('');
  else if (n === 4 || n == 9) return romanNumeral(1) + romanNumeral(n + 1);
  else if (n === 5) return 'V';
  else if (n > 5 && n < 9) return romanNumeral(5) + romanNumeral(n - 5);
  else if (n === 10) return 'X';
  else if (n > 10 && n < 40) return romanNumeral(10) + romanNumeral(n-10);
  else if (n === 40) return 'XL';
  else if (n === 50) return 'L';
}