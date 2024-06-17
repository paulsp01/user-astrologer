// src/utils/roundRobin.js
let currentIndex = 0;

function roundRobin(astrologers) {
  if (!astrologers || astrologers.length === 0) {
    throw new Error("No astrologers available");
  }

  const astrologer = astrologers[currentIndex];
  currentIndex = (currentIndex + 1) % astrologers.length;
  return astrologer._id;
}

module.exports = roundRobin;
