const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// ✅ Allow frontend to talk to backend (CORS fix)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// Store fan speed
let fanSpeed = "OFF";

// API to set speed
app.post('/setSpeed', (req, res) => {
    setTimeout(() => {   // simulate network delay
        fanSpeed = req.body.speed;
        console.log("Control Signal Received:", fanSpeed);
        res.json({ message: "Speed set to " + fanSpeed });
    }, 1000);
});

// API to get speed
app.get('/getSpeed', (req, res) => {
    res.json({ speed: fanSpeed });
});

// ✅ IMPORTANT FIX FOR HOSTING
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});