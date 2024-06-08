const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes/index');

app.use(express.json());


app.use(express.static(path.join(__dirname, '../client')));


app.use('/api', routes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

