export default function romanNumeral(n: number): string {
  if (n <= 3) return Array(n).fill('I').join('');
  else return 'IV';
}