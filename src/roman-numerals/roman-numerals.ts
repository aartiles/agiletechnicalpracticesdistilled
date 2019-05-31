export default function romanNumeral(n: number): string {
  if (n <= 3) return fill(n, 'I');
  else if (n === 4) return 'IV';
  else if (n >= 5) return `V${fill(n - 5, 'I')}`;
}

function fill(n: number, char: string): string {
  return Array(n).fill(char).join('');
} 