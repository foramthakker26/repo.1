import User from "../models/user.js";

// GET profile
export const getProfile = async (req, res) => {
  try {
    const userId = req.params.id; 
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// UPDATE profile
export const updateProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    const updateData = {
      name: req.body.name,
      email: req.body.email
    };

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to update", error: error.message });
  }
};