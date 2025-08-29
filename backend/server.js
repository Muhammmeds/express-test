const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, '../frontend')));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/home.html'));
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server started on port 3000');
    console.log(__dirname)
});
