const Joi = require('joi');
const validate = require('./validate');

function processPaymentValidation(req, res, next) {
  const date = new Date();
  date.toISOString();
  // eslint-disable-next-line no-console
  console.log(date);
  const data = req.body;
  const processPaymentSchema = Joi.object().keys({
    creditCardNumber: Joi.string().required(),
    cardHolder: Joi.string().required(),
    expirationDate: Joi.date().required().greater(date.toISOString()),
    securityCode: Joi.string().optional().length(3),
    amount: Joi.number().required().positive(),
  });

  validate.validate(req, data, processPaymentSchema, res, next);
}

module.exports = { processPaymentValidation };
