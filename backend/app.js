const express = require("express");
const app = express();
const simple_error = require("./middleware/error");
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const payment = require("./routes/paymentRoute");
const order = require("./routes/orderRoute");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload());
app.use(cors());

app.get('/', (req, res)=>
{
    res.send("Welcome to Shopio-Ecommerce Website");
})

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// middleware for error
app.use(simple_error);

module.exports = app;
