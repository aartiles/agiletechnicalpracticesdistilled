export default function fibonacci(position: number): number {
  if (position === 1) return 0;
  else if (position === 2) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}