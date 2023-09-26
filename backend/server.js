const express = require('express');
const { chargeCreditCard } = require('./authorizenet');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/authorizenet', (req, res) => {
    chargeCreditCard((response) => {res.send(response)})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});