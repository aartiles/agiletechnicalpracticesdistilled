export default function romanNumeral(n: number): string {
  if (n <= 3) return fill(n, 'I');
  else if (n === 4) return 'IV';
  else if (n >= 5 && n < 9) return `V${fill(n - 5, 'I')}`;
  else if (n === 9) return 'IX';
  else if (n >= 10) return `X${fill(n - 10, 'I')}`;
}

function fill(n: number, char: string): string {
  return Array(n).fill(char).join('');
} 