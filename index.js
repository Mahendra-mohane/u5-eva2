const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
