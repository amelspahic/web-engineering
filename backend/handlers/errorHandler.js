exports.errorHandle = (err, res) => {
  const message = err;
  res.status(500).json({
    status: "error",
    message,
  });
};
