const Errorhandler = require("../utils/errorhandler");
const async_error = require("../middleware/catchasyncerror");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../model/usermodel");
exports.isAuthenticated = async_error(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new Errorhandler("Please login to Explore new stuff.", 401));
  }
  const decodedData = jsonwebtoken.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
});

exports.isauthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new Errorhandler("You have no access to this resource.", 403)
      );
    }
    next();
  };
};
