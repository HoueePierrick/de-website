const test = "Unique insights on how you can boost your sales and margins";
const test2 = "transLinear";

function withoutFirstMaj(text: string) {
  const firstLetter = text[0].toLowerCase();
  const restofText = text.substring(1);
  const result = firstLetter + restofText;
  return result;
}

function makeFirstMaj(text: string) {
  const firstLetter = text[0].toUpperCase();
  const restofText = text.substring(1);
  const result = firstLetter + restofText;
  return result;
}

console.log(makeFirstMaj(test2));

export { withoutFirstMaj, makeFirstMaj };
