/**
 * Get IOTA address. (Since seed belonging to session id is managed on backend.)
 *
 * @module get-address
 */


const iota = require('./../modules/iota');
const sessionState = require('./../session-state');
const logger = require('./../logger')(module);


/**
 * Request handler to get address belonging to session id.
 * @function requestHandler
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @returns {undefined}
 */
module.exports = async function requestHandler(req, res) {
  const { sessionId } = req;

  logger.info(`Getting address for session id ${sessionId}`);

  if (typeof sessionState[sessionId] === 'undefined') {
    return res
      .status(500)
      .send({
        success: false,
        message: 'No sessionId set. Call api/init first or reset session.',
      });
  }

  const seed = sessionState[sessionId].iotaSeed;
  if (typeof seed === 'undefined') {
    return res
      .status(500)
      .send({
        success: false,
        message: 'No seed generated. Call api/init first.',
      });
  }

  const [address] = await iota.getAddress(seed, 1);
  return res
    .status(200)
    .send({
      success: true,
      message: address,
    });
};
