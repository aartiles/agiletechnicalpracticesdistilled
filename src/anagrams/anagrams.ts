export default function anagrams(s: string): Array<string> {
  if (s.length <= 1 || s[0] === s[1]) return [s];
  else return [s, s[1] + s[0]];
}