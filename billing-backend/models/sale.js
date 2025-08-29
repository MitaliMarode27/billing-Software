// models/Sale.js
// models/Sale.js
import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  date: { type: Date, required: true, default: Date.now },
  invoiceNo: { type: String, required: true },
  customerName: { type: String, default: "" },
  contactNumber: { type: String, default: "" },
  location: { type: String, default: "" },
  paymentStatus: { type: String, default: "" },
  paymentMethod: { type: String, default: "" },
  totalAmount: { type: Number, default: 0 },
  totalPaid: { type: Number, default: 0 },
  sellDue: { type: Number, default: 0 },
  sellReturnDue: { type: Number, default: 0 },
  shippingStatus: { type: String, default: "" },
  totalItems: { type: Number, default: 0 },
  addedBy: { type: String, default: "" }
  // add other fields as needed
});

const Sale = mongoose.model("Sale", saleSchema);

export default Sale;
