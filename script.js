const express = require('express');
const app = express();
const axios = require('axios');

app.get('/disciplines', async (req, res) => {
  const query = req.query.q;
  const response = await axios.get(`https://external-api.com/search?query=${query}`);
  res.json(response.data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
