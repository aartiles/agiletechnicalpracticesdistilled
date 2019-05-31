export default function anagrams(s: string): Array<string> {
  const words = [s];
  while(combineWords(words));
  return words.sort();
}

function combineWords(words: Array<string>): boolean {
  let foundNew = false;
  words.forEach((word) => {
    foundNew = foundNew || combineWord(words, word);
  });
  return foundNew;
}

function combineWord(words: Array<string>, word: string): boolean {
  let foundNew = false;
  for (let pos1 = 0; pos1 < word.length - 1; pos1++) {
    for (let pos2 = pos1 + 1; pos2 < word.length; pos2++) {
      foundNew = foundNew || addWord(words, word, pos1, pos2);
    }
  }
  return foundNew;
}

function addWord(words: Array<string>, s: string, pos1: number, pos2: number): boolean {
  const newWord = swapChars(s, pos1, pos2);
  if (words.indexOf(newWord) < 0) {
    words.push(newWord);
    return true;
  }
  return false;
}

function swapChars(s: string, pos1: number, pos2: number): string {
  if (pos2 > s.length - 1) return s;
  return s.substring(0, pos1) +
    s[pos2] +
    s.substr(pos1 + 1, pos2 - pos1 - 1) +
    s[pos1] +
    s.substring(pos2 + 1);
}