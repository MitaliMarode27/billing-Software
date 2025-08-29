import mongoose from 'mongoose';

const stockTransferSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  referenceNo: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'In Transit', 'Completed'], required: true },
  locationFrom: { type: String, required: true },
  locationTo: { type: String, required: true },
  shippingCharges: { type: Number, default: 0 },
  additionalNotes: { type: String },
  totalAmount: { type: Number, required: true }
}, { timestamps: true });

const StockTransfer = mongoose.model('StockTransfer', stockTransferSchema);
export default StockTransfer;
