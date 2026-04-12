const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const authRoute = require('./routes/auth');

app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
    res.json({ message: "Hello, world!" });
});

const PORT = process.env.PORT || 5000; // Ako nema u .env PORT onda defaultaj na 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});