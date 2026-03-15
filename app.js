const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Docker container ke andar files '/usr/src/app' mein hoti hain
// Ye line Express ko batayegi ki sari static files yahin hain
app.use(express.static(path.join(__dirname, '.')));

// Main route jo index.html serve karega
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Test API
app.get('/api/status', (req, res) => {
    res.json({ status: "Success", message: "Docker Backend is Live!" });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
