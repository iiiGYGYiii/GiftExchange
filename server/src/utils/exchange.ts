function shuffleList(unshuffledList: Array<string>): Array<string> {
  const list = [...unshuffledList];
  let currentIndex = list.length,
    randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [list[currentIndex], list[randomIndex]] = [
      list[randomIndex],
      list[currentIndex],
    ];
  }
  return list;
}

/**
 * Forward tracking indexes, with base list to follow
 * and a shuffled list to track.
 * @param list Base list to track indexes.
 * @param shuffledList Shuffled list to chain indexes
 * @param nextIndex Index that will be changed
 * @returns nextIndex to track
 */
function changeIndexes(
  list: string[],
  shuffledList: string[],
  nextIndex: number
): number {
  list[nextIndex] = `-${list[nextIndex]}`;
  const currentIndex = nextIndex;
  nextIndex = list.indexOf(shuffledList[currentIndex]);
  return nextIndex;
}

/**
 * Follows base list with shuffled list to know if tracking
 * will end in a loop.
 * @param list Base list
 * @param shuffledList Shuffled list
 * @returns Boolean indicating if tracking values end in a early loop
 */
export function listLoops(list: string[], shuffledList: string[]): boolean {
  const bufferedList = [...list];
  let nextIndex = 0;
  let existsLoop = false;
  for (let i = 0; i < list.length; i++) {
    nextIndex = changeIndexes(bufferedList, shuffledList, nextIndex);
    if (nextIndex === -1) {
      if (i === list.length - 1) return existsLoop;
      existsLoop = true;
      break;
    }
  }
  return existsLoop;
}

export function allHave3MinLength(list: string[]): boolean {
  return list.every((name) => name.length >= 3);
}

export function namesDontRepeat(list: string[]): boolean {
  const set = new Set(list);
  return set.size === list.length;
}

export function shuffleExchangeList(list: string[]): string[] {
  if (!allHave3MinLength(list) || !namesDontRepeat(list) || list.length < 3)
    throw new Error(
      "Invalid list of names, all must have at least 3 length, and don't have to repeat"
    );
  let shuffledList = shuffleList(list);
  let existsLoop = listLoops(list, shuffledList);
  while (existsLoop) {
    shuffledList = shuffleList(list);
    existsLoop = listLoops(list, shuffledList);
  }
  return shuffledList;
}

export function getMatchedParticipant(
  list: string[],
  shuffledList: string[],
  participant: string
): string {
  if (!list.includes(participant))
    throw new Error("Participant doesn't exists.");
  const participantIndex = list.indexOf(participant);
  const matchedParticipant = shuffledList[participantIndex];
  return matchedParticipant;
}

export function isLastParticipant(list: string[], participant: string) {
  const remaining = list.filter((s) => !s.startsWith("-"));
  return remaining.length === 1 && remaining[0] === participant;
}
