const express = require("express");
const apiResponse = require("./helpers/response");
const routes = require("./routes/index");
const app = express();
const cors = require("cors");

const { mongoDbUrl, port } = require("./config");

const MONGODB_URL = process.env.MONGODB_URL || mongoDbUrl;
const APP_PORT = process.env.APP_PORT || port;

const mongoose = require("mongoose");
const { errorHandle } = require("./handlers/errorHandler");
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    if (process.env.NODE_ENV !== "test") {
      console.log("Connected to %s", MONGODB_URL);
      console.log("App is running ... \n");
      console.log("Press CTRL + C to stop the process. \n");
    }
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/", routes);

app.all("*", function (req, res) {
  return apiResponse.notFoundResponse(res, "Page not found");
});

app.use((err, req, res, next) => {
  errorHandle(err, res);
});

app.listen(APP_PORT, () => {
  console.log(`Web Engineering backend listening on port ${APP_PORT}!`);
});
