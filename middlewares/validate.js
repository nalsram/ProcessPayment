/* eslint-disable no-unused-vars */
const Joi = require('joi');
const dto = require('../utils/dto');

// eslint-disable-next-line func-names
const validate = function (req, data, schema, res, next) {
  Joi.validate(data, schema, (err, value) => {
    if (err) {
      const message = err.details[0].message.replace(/[^a-zA-Z ]/g, '');
      if (message.includes('creditCardNumber with value  fails to match the required pattern')) {
        dto.sendErrorResponse(res, { message: 'invalid card number' });
      } else {
        dto.sendErrorResponse(res, { message });
      }
    } else {
      next();
    }
  });
};
module.exports = {
  validate,
};
