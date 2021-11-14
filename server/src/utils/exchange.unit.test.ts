import {
  allHave3MinLength,
  listLoops,
  namesDontRepeat,
  shuffleExchangeList,
} from "./exchange";

describe("Exchange Logic tests", () => {
  const truthy = ["Alba", "Maria", "Nestle", "Carnation", "Coffee"];

  it("Check that every string in array has at least 3 chars of length", () => {
    expect(allHave3MinLength(truthy)).toBe(true);
    const falsy = [...truthy, "a"];
    expect(allHave3MinLength(falsy)).toBe(false);
  });

  it("Names don't repeat in array", () => {
    expect(namesDontRepeat(truthy)).toBe(true);
    const falsy = [...truthy, truthy[2]];
    expect(namesDontRepeat(falsy)).toBe(false);
  });

  describe("Exchange Shuffling tests", () => {
    it("Check for input to meet conditions", () => {
      expect(() => shuffleExchangeList(truthy)).not.toThrow();

      const falsy1 = [...truthy, "a"];
      expect(() => shuffleExchangeList(falsy1)).toThrow();

      const falsy2 = [...truthy, truthy[2]];
      expect(() => shuffleExchangeList(falsy2)).toThrow();
    });

    it("Array shuffled list doesn't end in early loop", () => {
      const shuffledList = shuffleExchangeList(truthy);
      expect(listLoops(truthy, shuffledList)).toBe(false);
    });
  });
});
