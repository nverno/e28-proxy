const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/.env '});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const xpath = require('./routes/api/xpath');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,application/json'
  );
  next();
});
app.use('/api/xpath', xpath);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));