export default function anagrams(s: string): Array<string> {
  const res = [s];
  if (s.length <= 2) {
    const newWord = swapChars(s, 0, 1);
    if (res.indexOf(newWord) < 0) res.push(newWord);
    return res;
  }
  else return [s,  swapChars(s, 1, 2), swapChars(s, 0, 2)];
}

function swapChars(s: string, pos1: number, pos2: number): string {
  if (pos2 > s.length - 1) return s;
  return s.substring(0, pos1) +
    s[pos2] +
    s.substr(pos1 + 1, pos2 - pos1 - 1) +
    s[pos1] +
    s.substring(pos2 + 1);
}