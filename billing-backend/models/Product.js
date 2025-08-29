// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: String,
    SKU: String,
    barcodeType: String,
    unit: String,
    brand: String,
    category: String,
    subCategory: String,
    businessLocation: String,
    alertQuantity: Number,
    weight: String,
    customField1: String,
    customField2: String,
    customField3: String,
    customField4: String,
    image: String, // stores uploaded image filename
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
