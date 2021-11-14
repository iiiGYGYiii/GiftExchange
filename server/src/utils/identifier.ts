const nineDigitsMultiplier = 10e8;

function createRandomNumber(): number {
  return Math.floor(Math.random() * nineDigitsMultiplier);
}

export function limitStringToSizeNine(identifier: number): string {
  if (identifier.toString().length < 9)
    return identifier.toString().padStart(9, "0");
  const nineDigitsIdentifier = identifier % nineDigitsMultiplier;
  return nineDigitsIdentifier.toString();
}

export const createIdentifier: () => string = () => {
  const randomNumber: number = createRandomNumber();
  const identifier: string = limitStringToSizeNine(randomNumber);
  return identifier;
};
