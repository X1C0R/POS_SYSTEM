import supabase from "../config/supabase.js";

export const getMe = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, full_name, email, role")
      .eq("id", req.user.id)
      .single();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.json(data);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
