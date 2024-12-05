import ProductModle from "../model/products.js";
import { CreateError } from "../utils/error.js";
import { upload } from "../utils/multer.js";
export const create = async (req, res) => {
  const {
    Title,
    ShortDescription,
    Image,
    Description,
    Price,
    PriceDis,
    Rating,
    Review,
  } = req.body;

  const product = await ProductModle.create({
    Title,
    ShortDescription,
    Image,
    Description,
    Price,
    PriceDis,
    Rating,
    Review,
  });

  try {
    await product.save();
    res.json(product);
    console.log(product);
  } catch (error) {}
};
export const allProducts = async (req, res) => {
  try {
    const product = await ProductModle.find();
    res.json(product);
  } catch (error) {
    next(CreateError(error));
  }
};
export const singleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModle.findById(id);
    res.json(product);
  } catch (error) {
    next(CreateError(error));
  }
};
export const update = async (req, res) => {
  const { id } = req.params;
  const product = await ProductModle.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    await product.save();

    res.json("Product have being uptated");
  } catch (error) {
    next(CreateError(error));
  }
};
export const deletes = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModle.findByIdAndDelete(id);
    res.json("deleted");
  } catch (error) {
    next(CreateError(error));
  }
};
