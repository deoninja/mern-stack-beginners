const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Stack for Beginners API');
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;