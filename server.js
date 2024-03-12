const express = require('express');
const PORT = 8080;
const app = express();

app.listen(PORT, () => { 
    console.log(`server is listening on PORT: ${PORT}`);
})

app.get('/', (req, res) => {
    res.send('server is up and running!');
});