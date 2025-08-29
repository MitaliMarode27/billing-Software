import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  supplier: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  referenceNo: { type: String },
  purchaseStatus: { type: String },
  paymentStatus: { type: String },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
      purchasePrice: Number,
      total: Number,
    }
  ], // <-- comma was missing here
  discount: Number,
  tax: Number,
  shippingCharges: Number,
  totalAmount: Number,
  notes: String,
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
export default Purchase;
