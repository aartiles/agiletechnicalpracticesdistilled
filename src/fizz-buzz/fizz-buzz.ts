export default function fizzbuzz(n: number): string {
  if (n % 3 === 0) return 'Fizz';
  else return n.toString();
}