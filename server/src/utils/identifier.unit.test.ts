import { createIdentifier, limitStringToSizeNine } from "./identifier";

describe("Identifier Test", () => {
  it("Identifier must return a string", () => {
    const newIdentifier = createIdentifier();
    expect(typeof newIdentifier).toBe("string");
  });

  it("Identifier must have length of 9", () => {
    const newIdentifier = createIdentifier();
    expect(newIdentifier).toHaveLength(9);
  });

  it("Identifier always to length of 9", () => {
    const oneDigit = 0;
    expect(limitStringToSizeNine(oneDigit)).toHaveLength(9);
    const tenDigits = 1234567890;
    expect(limitStringToSizeNine(tenDigits)).toHaveLength(9);
  });
});
