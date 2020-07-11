exports.successResponse = (res, data) => {
  return res.status(200).json(data);
};

exports.notFoundResponse = (res, msg) => {
  var data = {
    message: msg,
  };
  return res.status(404).json(data);
};

exports.noContentResponse = (res, msg) => {
  var data = {
    message: msg,
  };
  return res.status(204).json(data);
};

exports.serverErrorResponse = (res, msg) => {
  var data = {
    message: msg,
  };
  return res.status(500).json(data);
};

exports.validationErrorResponse = (res, msg, data) => {
  var resData = {
    message: msg,
    data: data,
  };
  return res.status(400).json(resData);
};
