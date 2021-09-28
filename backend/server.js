const dotenv = require('dotenv');
const express = require('express');
const app = express();
const products = require('./data/products');
const path = require('path');
const morgan = require('morgan');

// Server
dotenv.config({
  path: __dirname + '/config/config.env',
});

// DB Connect
require('./db/conn');

// Logger Middleware
app.use(morgan('dev'));

// Use JSON
app.use(express.json());

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/help', require('./routes/help'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('/frontend/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

const PORT = process.env.PORT || 4000;
// Port Listen
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
