export default function anagrams(s: string): Array<string> {
  if (s.length <= 1) return [s];
  else if (s.length === 2) {
    if (s[0] === s[1]) return [s];
    else return [s, s[1] + s[0]];
  }
  else return [s, s[0] + s[2] + s[1], s[2] + s[0] + s[1]];
}