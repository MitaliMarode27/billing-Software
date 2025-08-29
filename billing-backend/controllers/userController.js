import User from "../models/userModels.js";

// GET /api/users - fetch all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // fetch users from DB
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};