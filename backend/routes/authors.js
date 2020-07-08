module.exports.getAuthors = async (req, res, next) => {
	res.send("Hello authors!");
};

module.exports.getAuthor = async (req, res, next) => {
	res.send("Hello author!");
};