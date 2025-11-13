const { isValidObjectId } = require("mongoose");
const productModel = require("../models/product.model");

const getAllProducts = async (req, res) => {
  let { page = 1, limit = 5 } = req.query;
  limit > 5 ? (limit = 5) : limit;
  const products = await productModel
    .find()
    .skip((page - 1) * limit)
    .limit(limit);

  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(404).json({ message: "Invalid id" });
  }
  const foundProduct = await productModel.findById(id);
  res.status(200).json(foundProduct);
};

const createProduct = async (req, res) => {
  const { name, price, category, description } = req.body;
  if (!name || !price || !category) {
    return res
      .status(400)
      .json({ message: "name, price and category are required fields" });
  }
  try {
    const newProduct = await productModel.create(
      {
        name,
        price,
        category,
        description,
      },
      { runValidators: true }
    );
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category, description } = req.body;

    if (!isValidObjectId(id)) {
      return res.status(404).json({ message: "Invalid id" });
    }

    if (!name || !price || !category || !description) {
      return res.status(400).json({ message: "all fields are required" });
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      { name, price, category, description },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "product not found" });
    }

    res
      .status(200)
      .json({ message: "updated successfully", data: updatedProduct });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(404).json({ message: "Invalid id" });
    }

    const deletedProduct = await productModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "product not found" });
    }
    res
      .status(200)
      .json({ message: "deleted successfully", data: deletedProduct });

  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
