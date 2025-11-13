const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    price: { type: Number, required: true, min: 2, max: 4000 },
    category: { type: String, required: true },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('product', productSchema)
