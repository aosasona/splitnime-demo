/**
 *
 * @param {*} text
 * @returns array
 * @description Split text into letters
 */
const SplitLetters = (text) => {
  const element = text.trim().toString();
  const base = element.length > 1 ? [...element] : [element];

  return [...base];
};

/**
 *
 * @param {*} text
 * @returns array
 * @description Split words
 */
const SplitWords = (text) => {
  const element = text.trim().toString();
  const raw = element.length > 1 ? element.split(" ") : [element];
  const base = [];
  raw.forEach((el) => {
    base.push(el + "");
  });
  return base;
};

/**
 *
 * @param {*} text
 * @returns array
 * @description Split sentences based on lines
 */
const SplitLines = (text) => {
  const element = text.trim().toString();
  const raw = element.length > 1 ? element.split(/\n|\t/) : [element];
  const base = [];
  raw.forEach((el) => {
    base.push(el + "\n");
  });
  return base;
};

export { SplitWords, SplitLetters, SplitLines };
