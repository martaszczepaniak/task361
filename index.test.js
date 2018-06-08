const score = results => {
  if (results.length === 0) {
    return "";
  }
  return `${results}: 1`;
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
