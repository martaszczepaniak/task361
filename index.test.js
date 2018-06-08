const score = results => {
  if (results.length === 0) {
    return "";
  }
  const scores = {};
  for (let char of results) {
    const scoreDifference = char === char.toUpperCase() ? -1 : 1;
    char = char.toLowerCase();
    scores[char]
      ? (scores[char] += scoreDifference)
      : (scores[char] = scoreDifference);
  }
  return Object.entries(scores)
    .sort(
      ([aKey, aValue], [bKey, bValue]) =>
        aValue === bValue ? aKey > bKey : aValue < bValue
    )
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
};

test("returns empty string for empty string", () => {
  expect(score("")).toEqual("");
});

test("returns score for 1 result", () => {
  expect(score("a")).toEqual("a: 1");
});

test("returns score for 1 different result", () => {
  expect(score("b")).toEqual("b: 1");
});

test("returns score for 2 results", () => {
  expect(score("ab")).toEqual("a: 1, b: 1");
});

test("returns score for 2 same results", () => {
  expect(score("aa")).toEqual("a: 2");
});

test("returns score for different and same results", () => {
  expect(score("dbba")).toEqual("b: 2, a: 1, d: 1");
});

test("returns score for example results", () => {
  expect(score("dbbaCEDbdAacCEAadcB")).toEqual("b: 2, d: 2, a: 1, c: 0, e: -2");
});
