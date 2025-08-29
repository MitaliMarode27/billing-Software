import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  expenseCategory: {
    type: String,
    required: true
  },
  referenceNo: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ["Paid", "Due", "Partial"],
    default: "Paid"
  },
  totalAmount: {
    type: Number,
    required: true
  },
  additionalNotes: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model("Expense", expenseSchema);
