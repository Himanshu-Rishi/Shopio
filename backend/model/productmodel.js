const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of the product!"],
  },
  description: {
    type: String,
    required: [true, "Please enter the description of the product!"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the price of the product!"],
    maxLength: [6, "Price cannot exceeded more!"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  stock: {
    type: Number,
    default: 1,
    maxLength: [3, "Stock cannot exceeded more than this!"],
  },
  numOfReviews:
  {
    type: Number,
    default: 0
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User",
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productschema);
