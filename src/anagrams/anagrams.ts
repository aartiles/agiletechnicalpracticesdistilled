export default function anagrams(s: string): Array<string> {
  const words = [s];
  if (s.length <= 2) {
    addWord(words, s, 0, 1);
    return words;
  }
  else {
    addWord(words, s, 1, 2);
    addWord(words, s, 0, 2);
  }
  return words;
}

function addWord(words: Array<string>, s: string, pos1: number, pos2: number): void {
  const newWord = swapChars(s, pos1, pos2);
  if (words.indexOf(newWord) < 0) words.push(newWord);
}

function swapChars(s: string, pos1: number, pos2: number): string {
  if (pos2 > s.length - 1) return s;
  return s.substring(0, pos1) +
    s[pos2] +
    s.substr(pos1 + 1, pos2 - pos1 - 1) +
    s[pos1] +
    s.substring(pos2 + 1);
}