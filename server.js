const express = require('express');
const app = express();

app.use(express.json());

// ✅ ADD THIS LINE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

let fanSpeed = "OFF";

app.post('/setSpeed', (req, res) => {
    fanSpeed = req.body.speed;
    console.log("Control Signal Received:", fanSpeed);
    res.json({ message: "Speed set to " + fanSpeed });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});