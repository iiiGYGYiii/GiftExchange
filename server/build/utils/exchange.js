"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLastParticipant = exports.getMatchedParticipant = exports.shuffleExchangeList = exports.namesDontRepeat = exports.allHave3MinLength = exports.listLoops = void 0;
function shuffleList(unshuffledList) {
    var _a;
    var list = __spreadArray([], unshuffledList, true);
    var currentIndex = list.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        _a = [
            list[randomIndex],
            list[currentIndex],
        ], list[currentIndex] = _a[0], list[randomIndex] = _a[1];
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
function changeIndexes(list, shuffledList, nextIndex) {
    list[nextIndex] = "-" + list[nextIndex];
    var currentIndex = nextIndex;
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
function listLoops(list, shuffledList) {
    var bufferedList = __spreadArray([], list, true);
    var nextIndex = 0;
    var existsLoop = false;
    for (var i = 0; i < list.length; i++) {
        nextIndex = changeIndexes(bufferedList, shuffledList, nextIndex);
        if (nextIndex === -1) {
            if (i === list.length - 1)
                return existsLoop;
            existsLoop = true;
            break;
        }
    }
    return existsLoop;
}
exports.listLoops = listLoops;
function allHave3MinLength(list) {
    return list.every(function (name) { return name.length >= 3; });
}
exports.allHave3MinLength = allHave3MinLength;
function namesDontRepeat(list) {
    var set = new Set(list);
    return set.size === list.length;
}
exports.namesDontRepeat = namesDontRepeat;
function shuffleExchangeList(list) {
    if (!allHave3MinLength(list) || !namesDontRepeat(list) || list.length < 3)
        throw new Error("Invalid list of names, all must have at least 3 length, and don't have to repeat");
    var shuffledList = shuffleList(list);
    var existsLoop = listLoops(list, shuffledList);
    while (existsLoop) {
        shuffledList = shuffleList(list);
        existsLoop = listLoops(list, shuffledList);
    }
    return shuffledList;
}
exports.shuffleExchangeList = shuffleExchangeList;
function getMatchedParticipant(list, shuffledList, participant) {
    if (!list.includes(participant))
        throw new Error("Participant doesn't exists.");
    var participantIndex = list.indexOf(participant);
    var matchedParticipant = shuffledList[participantIndex];
    return matchedParticipant;
}
exports.getMatchedParticipant = getMatchedParticipant;
function isLastParticipant(list, participant) {
    var remaining = list.filter(function (s) { return s !== "undefined"; });
    return remaining.length === 1 && remaining[0] === participant;
}
exports.isLastParticipant = isLastParticipant;
