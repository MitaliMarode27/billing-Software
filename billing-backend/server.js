import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import salesRoutes from "./routes/saleRoutes.js";
import stockTransferRoutes from "./routes/stockTransferRoutes.js"; // Fixed: added .js
import stockAdjustmentRoutes from './routes/stockAdjustmentRoutes.js';
import expenseRoutes from "./routes/expenseRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // your frontend origin
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/products", productRoutes);
app.use("/uploads", express.static("uploads")); // serves uploaded files
app.use("/api/purchases", purchaseRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/stock-transfers", stockTransferRoutes);
app.use('/api/stock-adjustments', stockAdjustmentRoutes);
app.use("/api/expenses", expenseRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
