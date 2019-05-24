export default function fizzbuzz(n: number): string {
  if (n % 3 === 0) return 'Fizz';
  else if (n === 5) return 'Buzz';
  else return n.toString();
}