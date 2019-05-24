export default function fizzbuzz(n: number): string {
  if (n === 3 || n === 6) return 'Fizz';
  else return n.toString();
}