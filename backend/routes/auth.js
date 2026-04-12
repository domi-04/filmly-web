const express = require('express');
const router = express.Router();
const db = require('../config/db');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET = process.env.JWT_SECRET;
const saltRounds = 10; // for hashing the password

// register - tested using postman, working!
router.post('/register', async (req, res) => {
    const { username, email, age, password } = req.body;
    if (!username || !email || !age || !password) {
        return res.status(400).json({ error: "All fields are required!" }); // 400 - bad request error
    }
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const SQL = "INSERT INTO users (username, email, age, password) VALUES (?, ?, ?, ?)";
        db.query(SQL, [username, email, age, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Database error.", message: err.message }); // 500 - server error
            }
            res.json({ success: true, message: "Registered successfully." });
        });

    } catch (err) {
        res.status(500).json({ error: "Hashing error." });
    }
}); // /api/auth/register

// TODO: login, logout, ..., authmiddleware file

module.exports = router;