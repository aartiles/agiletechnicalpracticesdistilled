export default function fizzbuzz(n: number): string {
  if (n < 1) throw new Error('n should be bigger than 0');
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  else if (n % 3 === 0) return 'Fizz';
  else if (n % 5 === 0) return 'Buzz';
  else return n.toString();
}