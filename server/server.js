import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Backend working 🚀" });
}
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});