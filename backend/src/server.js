import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createPool } from "mysql2/promise";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection pool
const pool = createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "example",
  database: process.env.DB_NAME || "companydb"
});

// Simple healthcheck route
app.get("/api/health", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS ok");
    res.json({ status: "ok", db: rows[0].ok });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "DB not reachable" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Backend server running on port \${PORT}\`);
});
