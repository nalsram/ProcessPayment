const dto = require('../../utils/dto');

function ProcessPayment(req, res) {
  try {
    dto.sendResponse(res, 200, 'version 2 comming soon');
  } catch (error) {
    dto.sendErrorResponse(res);
  }
}

module.exports = { ProcessPayment };
