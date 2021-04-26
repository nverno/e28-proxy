const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const fetchSource = async ({ url, ...params }, res) => {
  const response = await fetch(url);
  if (!response.ok) {
    return res.status(400).json(response);
  }

  console.log("DEBUG: response: ", response);

  const data = await response.json();
  console.log("DEBUG: data: ", data);
  return res.json({});
};

router.get('/', async (req, res) => {
  const params = req.query;

  return fetchSource(params, res);
});

module.exports = router;
