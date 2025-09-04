const wordCount = (value, maxWords) => {
  const words = value
    .trim()
    .split("")
    .filter((char) => char !== "");
  const wordCount = value.trim() === "" ? 0 : words.length;

  return wordCount <= maxWords;
};

const briefNameMaxWords = 80;
const briefDetailMaxWords = 500;

export { wordCount, briefNameMaxWords, briefDetailMaxWords };
