const express = require('express');
const axios = require('axios');

const app = express();

app.get('/order', async (req, res) => {
  try {
    // 🔹 Ambil data dari product-service
    const product = await axios.get('http://product-service:3001/products');


    res.json({
      message: 'Order berhasil',
      data: product.data
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3002, () => {
  console.log('Order Service running');
});