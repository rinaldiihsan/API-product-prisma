const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ProductRoutes = require('./routes/ProductRoutes.js');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log('Server Running In Port 5000....');
});
