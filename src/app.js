// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactUsRoutes = require('./routes/contactUs.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/contactus', contactUsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to your server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
