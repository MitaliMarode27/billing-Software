import mongoose from 'mongoose';

const stockAdjustmentSchema = mongoose.Schema({
  businessLocation: { type: String, required: true },
  referenceNo: { type: String, required: true },
  date: { type: Date, required: true },
  adjustmentType: { type: String, enum: ['Normal', 'Abnormal'], required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      unitPrice: { type: Number, required: true },
      subtotal: { type: Number, required: true },
    }
  ],
  totalAmountRecovered: { type: Number, default: 0 },
  reason: { type: String, default: '' },
  addedBy: { type: String, required: true }, // You can change this to ObjectId ref User if you have user auth
}, {
  timestamps: true,
});

const StockAdjustment = mongoose.model('StockAdjustment', stockAdjustmentSchema);

export default StockAdjustment;
