const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please Enter product description"],
  },
  price: {
    type: Number,
    required: [true, "please Enter product price"],
  },
  price: {
    type: Number,
    required: [true, "please Enter product price"],
    maxlength: [8, "price cannot exceed 8 charecters"],
  },
  rating: {
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
    required: [true, "please Enter product category"],
  },
  stock: {
    type: Number,
    required: [true, "please Enter product stock"],
    maxlength: [4, "stock cannot exceed 4 charecters"],
    default: 1,
  },
  numOfReview: {
    type: Number,
    default: 0,
  },
  review: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new mongoose.model("Product", productSchema);
