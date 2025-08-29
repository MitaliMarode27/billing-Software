export const getDashboardStats = async (req, res) => {
  try {
    // Sample data - later replace with real DB queries
    const data = {
      totalBills: 12,
      totalAmount: 37800,
      recentBill: {
        title: "Electricity Bill",
        amount: 2500,
        date: "2025-07-29"
      }
    };

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error loading dashboard data" });
  }
};
