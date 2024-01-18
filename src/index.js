const express = require('express');
const PORT = 5500;

const app = express();

app.get('/', (req, res) => {
    res.send('Home page')
});

app.listen(PORT, () => {
    console.log(`Server is listenig on port ${PORT}`);
});