export default function anagrams(s: string): Array<string> {
  if (s.length <= 1) return [s];
  else if (s.length === 2) {
    if (s[0] === s[1]) return [s];
    else return [s, swapChars(s, 0, 1)];
  }
  else return [s,  swapChars(s, 1, 2), swapChars(s, 0, 2)];
}

function swapChars(s: string, pos1: number, pos2: number): string {
  return s.substring(0, pos1) +
    s[pos2] +
    s.substr(pos1 + 1, pos2 - pos1 - 1) +
    s[pos1] +
    s.substring(pos2 + 1);
}