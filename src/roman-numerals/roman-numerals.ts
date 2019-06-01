
const baseDigits = [
  { a: 1000, r: 'M' },
  { a: 100, r: 'C' },
  { a: 10, r: 'X' },
  { a: 1, r: 'I' }
];

const halfDigits = [
  { a: 500, r: 'D' },
  { a: 50, r: 'L' },
  { a: 5, r: 'V' }
];

export default function romanNumeral(n: number): string {
  let roman = '';
  let remainder = n;
  baseDigits.forEach((digit, index) => {
    const repeat = Math.floor(remainder / digit.a);
    remainder = remainder % digit.a;

    if (repeat === 4) {
      roman += digit.r + halfDigits[index - 1].r;
    } else if (repeat >= 5 && repeat < 9) {
      roman += halfDigits[index - 1].r + fill(repeat - 5, digit.r);
    }
    else if (repeat === 9) {
      roman += digit.r + baseDigits[index - 1].r;
    } else if (repeat > 0) {
      roman += fill(repeat, digit.r);
    }
   
  });
  return roman; 
}

function fill(n: number, char: string): string {
  return Array(n).fill(char).join('');
}