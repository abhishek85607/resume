const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.static('/var/www/html'));


app.get('/api/status', (req, res) => {
    res.json({ 
        status: "Success", 
        message: "Vicky Bhai ka Backend Live ho gaya hai!",
        engineer: "Abhishek Kumar"
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
