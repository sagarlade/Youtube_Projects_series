const express = require("express");

const router = express.Router();

// we using this for databse
const pool = require("../db");

router.post('/', async (req, res) => {
  try {
    const { username, email, phone, message } = req.body;

    await pool.query(
      "insert into contact (username, email, phone, message) values ($1, $2, $3, $4)",
      [username, email, phone, message]
    );
    res.status(201).send(`Thank you for Contact Us!`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error while adding contact");
  }
});

module.exports = router;
