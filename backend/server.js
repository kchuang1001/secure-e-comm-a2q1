const express = require('express');
const { chargeCreditCard } = require('./authorizenet');
const { getAllItems } = require('./items');

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

app.get('/get-all-items', (req, res) => {
  res.send(getAllItems())
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});