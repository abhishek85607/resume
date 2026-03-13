const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Ye line Apache folder ki files dikhane mein madad karegi
app.use(express.static('/var/www/html'));

// Ek Test API
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
