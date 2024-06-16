let currentAstrologerIndex = 0;

function roundRobin(astrologers) {
  const astrologer = astrologers[currentAstrologerIndex];
  currentAstrologerIndex = (currentAstrologerIndex + 1) % astrologers.length;
  return astrologer._id;
}

module.exports = roundRobin;
