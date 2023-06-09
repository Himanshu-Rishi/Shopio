const Product = require("../model/productmodel");
const Errorhandler = require("../utils/errorhandler");
const async_error = require("../middleware/catchasyncerror");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");

exports.getallproducts = async_error(async (req, res, next) => {
  const itemPerPage = 12;
  const productCount = await Product.countDocuments();
  const apifeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter();
  let products = await apifeature.query;
  let filteredProductsCount = products.length;
  apifeature.pagination(itemPerPage);
  products = await apifeature.query.clone();
  res.status(200).json({
    success: true,
    products,
    productCount,
    itemPerPage,
    filteredProductsCount,
  });
});

exports.getproducts = async_error(async (req, res, next) => {
  const product_id = req.params.id;
  const product = await Product.findById(product_id);
  if (product) {
    const categoryProduct = await Product.find({ category: product.category });
    res.status(201).send({ success: true, product, categoryProduct });
  } else {
    return next(new Errorhandler("Product not found...!", 404));
  }
});

// admin routes

exports.getAdminproducts = async_error(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products
  });
});

exports.createproducts = async_error(async (req, res) => {
  let images = [];
  if(typeof req.body.images === "string")
  {
    images.push(req.body.images);
  }
  else
  {
    images = req.body.images;
  }

  const imagesLink = [];

  for(let i = 0; i < images.length; i++)
  {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });
    imagesLink.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  req.body.images = imagesLink;
  req.body.user = req.user.id;
  const product = await Product.create(req.body);
  return res.status(200).json({ success: true, product });
});

exports.updateproducts = async_error(async (req, res, next) => {
  const product_id = req.params.id;
  const body = req.body;
  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }
  const product = await Product.findByIdAndUpdate(product_id, body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!product) {
    return next(new Errorhandler("Product not found...!", 404));
  }
  res.status(201).send({ success: true, product });
});

exports.deleteproducts = async_error(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new Errorhandler("Product not found", 404));
  }

  for(let i = 0; i < product.images.length; i++)
  {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id)
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
  });
});

exports.createProductReview = async_error(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user.id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user.id.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user.id.toString()) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  let totalRating = 0;
  product.reviews.forEach((rev) => {
    totalRating += rev.rating;
  });
  product.ratings = totalRating / product.reviews.length;

  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    product,
  });
});

// Get All Reviews of a product
exports.getProductReviews = async_error(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new Errorhandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

exports.deleteReview = async_error(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) {
    return next(new Errorhandler("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
