const express = require("express");
const app = express();
const simple_error = require("./middleware/error");
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const payment = require("./routes/userRoute");
const order = require("./routes/paymentRoute");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const dotenv = require("dotenv");

dotenv.config({
  path: "backend/config/config.env",
});
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload());

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// middleware for error
app.use(simple_error);

module.exports = app;
