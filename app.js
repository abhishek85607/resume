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

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is flying at http://0.0.0.0:${port}`);
});
