class responses {
  static invalidRequest(res) {
    res.status(400).json({ code: 400, message: 'bad request' });
  }

  static sendResponse(res, code, message, data) {
    let response = {};
    if (data) {
      response = {
        code,
        message,
        data,
      };
    } else {
      response = {
        code,
        message,
        data: [],
      };
    }
    return res.status(code).json(response);
  }

  static sendErrorResponse(res, data) {
    res.status(500).json({ code: 500, message: 'internal server error', data });
  }
}

module.exports = responses;
