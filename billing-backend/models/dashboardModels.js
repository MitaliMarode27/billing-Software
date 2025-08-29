import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({
  customer: String,
  date: Date,
  invoiceNo: Number,
  contactNumber: String,
  location: String,
  shippingStatus: String,
  paymentStatus: String,
});


const Dashboard = mongoose.model("Dashboard", dashboardSchema);
export default Dashboard;
