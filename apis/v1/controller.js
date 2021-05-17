const dto = require('../../utils/dto');

async function ProcessPayment(req, res) {
  try {
    const {
      creditCardNumber, cardHolder, expirationDate, securityCode,
    } = req.body;

    const amount = Number(req.body.amount);
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    const amexpRegEx = /^(?:3[47][0-9]{13})$/;
    const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    if (!mastercardRegEx.test(creditCardNumber)
    && !amexpRegEx.test(creditCardNumber) && !visaRegEx.test(creditCardNumber)
    && !discovRegEx.test(creditCardNumber)) {
      dto.sendErrorResponse(res, { message: 'invalid card number' });
      return;
    }
    if (amount <= 20) {
      /** will use cheap payment gateway method here */
    } else if (amount > 20 && amount <= 500) {
      /** will use expensive payment gateway method here */

    } else {
      /** will use premium payment gateway method here */
    }
    dto.sendResponse(res, 200, 'OK', {
      creditCardNumber, cardHolder, expirationDate, securityCode, amount,
    });
  } catch (error) {
    dto.sendErrorResponse(res);
  }
}

module.exports = { ProcessPayment };
