import {
  allHave3MinLength,
  getMatchedParticipant,
  isLastParticipant,
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

  it("If last participant return true", () => {
    const testCase = truthy.map((_) => "undefined");
    testCase[0] = truthy[0];
    const lastParticipant = isLastParticipant(testCase, truthy[0]);
    expect(lastParticipant).toBe(true);
    const testCase2 = [...testCase];
    testCase2[0] = truthy[0];
    testCase2[1] = truthy[1];
    expect(isLastParticipant(testCase2, truthy[0])).toBe(false);
  });

  it("Names don't repeat in array", () => {
    expect(namesDontRepeat(truthy)).toBe(true);
    const falsy = [...truthy, truthy[2]];
    expect(namesDontRepeat(falsy)).toBe(false);
  });

  it("Match participant is returned", () => {
    const shuffledList = shuffleExchangeList(truthy);
    const participantIndex = 2;
    const participant = truthy[participantIndex];
    const pMatchedParticipant = shuffledList[participantIndex];
    const matchedParticipant = getMatchedParticipant(
      truthy,
      shuffledList,
      participant
    );
    expect(matchedParticipant).toEqual(pMatchedParticipant);
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
