const Errorhandler = require("../utils/errorhandler");
const async_error = require("../middleware/catchasyncerror");
const User = require('../model/usermodel');
const crypto = require("crypto");
const sendToken = require("../utils/token");
const { sendEmail } = require("../utils/sendEmail");
const cloudinary = require("cloudinary");


exports.registerUser = async_error(async(req, res, next)=>
{
  if(req.body.avatar)
  {
    const mycloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: 'scale'
    })
    const {name, email, password} = req.body;
    const user = await User.create({
        name, email,avatar:
        {
            public_id:mycloud.public_id,
            url:mycloud.secure_url
        },
        password
    });
    sendToken(user, 201, res);
  }
  else
  {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      avatar: {
        public_id: "Default_Profile",
        url:"https://res.cloudinary.com/dbymhpzhq/image/upload/v1682694433/avatars/user-2_pjgegi.png"
      },
      password,
    });
    sendToken(user, 201, res);
  }
})

exports.loginUser = async_error(async(req, res, next)=>
{
    const {email, password} = req.body;
    if(!email || !password)
    {
        return next(new Errorhandler("Please enter credential...!", 400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user)
    {
        return next(new Errorhandler("Please enter correct credential...!", 401));
    }
    const ispasswordmatched = await user.comparePassword(password);
    console.log(ispasswordmatched);
    if(!ispasswordmatched)
    {
        return next(
          new Errorhandler("Please enter correct credential...!", 401)
        );
    }
    sendToken(user, 200, res);
})

exports.logoutUser = async_error( async(req, res, next)=>
{
    const options = {
        expires:new Date(Date.now()),
        httpOnly: true
    }
    res.cookie("token", null, options);

    res.status(200).json(
        {
            success: true,
            msg: "Logged Out"
        }
    )
})

exports.forgetPassword = async_error(async(req, res, next)=>
{
    const user = await User.findOne({email: req.body.email});
    if(!user)
    {
        return next(new Errorhandler("User not found...!", 404));
    }
    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave: false});
    const resetPasswordURL = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordURL} \n\n If you have not requested this email then, please ignore it.`
    try {
        await sendEmail({
          email: user.email,
          subject: "Ecommerce Password Recovery",
          message: message,
          name: user.name
        });

        res.status(200).json({
            success: true,
            msg: `Email sent to ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined
        await user.save({ validateBeforeSave: false });
        return next(new Errorhandler(error.message, 500));
    }
})

exports.resetPassword = async_error(async(req, res, next)=>
{
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}
      })

      if(!user)
      {
        return next(new Errorhandler("Reset Password Token is invalid or has been expired...!", 400))
      }

      if(req.body.password !== req.body.confirmPassword)
      {
        return next(
          new Errorhandler(
            "Password does not match...!",
            400
          )
        );
      }

      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      sendToken(user, 200, res);
})

exports.getUserDetail = async_error(async(req, res, next)=>
{
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user
    })
})

exports.updateUserPassword = async_error(async(req, res, next)=>
{
    const user = await User.findById(req.user.id).select("+password");
    const ispasswordmatched = await user.comparePassword(req.body.oldPassword);
    if(!ispasswordmatched)
    {
        return next(new Errorhandler("Old Password is incorrect...!", 400));
    }

    if(req.body.newPassword !== req.body.confirmPassword)
    {
        return next(new Errorhandler("Password does not match...!", 400));
    }

    user.password = req.body.newPassword;
    await user.save(); 
    sendToken(user, 200, res);
})

exports.updateProfile = async_error(async (req, res, next) => {
  const newUserDate = {
    name: req.body.name,
    email: req.body.email
  }
    // pending task cloudinary

    const user = await User.findByIdAndUpdate(req.user.id, newUserDate, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      user,
    });
});

exports.getUser = async_error(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users
  });
});

exports.getSingleUser = async_error(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if(!user)
  {
    return new Errorhandler("User does not exist", 404);
  }
  res.status(200).json({
    success: true,
    user
  });
});

exports.updateRole = async_error(async (req, res, next) => {
  const newUserDate = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserDate, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    user,
  });
});

exports.deleteUser = async_error(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return new Errorhandler("User does not exist", 404);
  }
  await user.deleteOne();
  res.status(200).json({
    success: true,
    msg: "Deleted Successfully",
  });
});