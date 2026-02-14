// controllers/registerController.js
import supabase from "../config/supabase.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { full_name, email, password, role } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({
        message: "Full name, email, and password are required",
      });
    }

    // 🔐 Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert directly into users table
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          full_name,
          email,
          password: hashedPassword,
          role: role || "employee",
        },
      ])
      .select();

    if (error) throw error;

    res.status(201).json({
      message: "User registered successfully",
      user: data[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
