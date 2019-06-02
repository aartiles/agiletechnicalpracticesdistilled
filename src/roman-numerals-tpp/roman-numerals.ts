
export default function romanNumeral(n: number): string {
  if (n <= 3) return Array(n).fill('I').join('');
  else if (n === 4) return 'IV';
  else if (n === 5) return 'V';
  else if (n > 5) return 'V' + Array(n - 5).fill('I').join('');
}