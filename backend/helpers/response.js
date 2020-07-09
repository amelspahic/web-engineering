exports.successResponse = function (res, data) {
	return res.status(200).json(data);
};

exports.notFoundResponse = function (res, msg) {
	var data = {
		message: msg
	};
	return res.status(404).json(data);
};


exports.serverErrorResponse = function (res, msg) {
	var data = {
		message: msg
	};
	return res.status(500).json(data);
};

exports.validationErrorResponse = function (res, msg, data) {
	var resData = {
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};