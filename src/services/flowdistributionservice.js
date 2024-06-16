const roundRobin = require("../utils/roundRobin");
const Astrologer = require("../models/astrologer");

async function initializeAstrologers() {
  const astrologers = await Astrologer.find();
  return astrologers;
}

async function assignAstrologer(userId) {
  const astrologers = await Astrologer.find();
  const astrologerId = roundRobin(astrologers);
  return { userId, astrologerId };
}

async function adjustFlowWeight(astrologerId, newFlowWeight) {
  const astrologer = await Astrologer.findById(astrologerId);
  if (astrologer) {
    astrologer.flowWeight = newFlowWeight;
    await astrologer.save();
    return true;
  }
  return false;
}

module.exports = {
  initializeAstrologers,
  assignAstrologer,
  adjustFlowWeight,
};
