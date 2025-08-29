const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.json('Hello');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
    console.log(__dirname)
});
