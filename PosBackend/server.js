    import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { registerUser } from "./controllers/authRegister.js";
import authRoutes from "./rouths/authRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});