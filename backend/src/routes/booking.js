import { Router } from "express";
import { sendBookingEmail } from "../services/emailService.js";

const router = Router();

router.post("/create", async (req, res) => {
  try {
    const { name, email, address, sqFeet, date } = req.body;

    const sql = `
      INSERT INTO bookings (name, email, address, sq_feet, preferred_date)
      VALUES (?, ?, ?, ?, ?)
    `;

    await req.pool.query(sql, [name, email, address, sqFeet, date]);

    // Send email notification to YOU
    await sendBookingEmail({ name, email, address, sqFeet, date });

    res.json({ success: true, message: "Booking created" });
  } catch (err) {
    console.error("Booking Route Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const [rows] = await req.pool.query("SELECT * FROM bookings ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error("Get Bookings Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
