const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
// const { DOMParser } = require('xmldom');
// const xpath = require('xpath');

const fetchSource = async ({ url, path, ...params }, res) => {
  const response = await fetch(url);
  if (!response.ok) {
    return res.status(400).json(response);
  }

  const data = await response.text();
  // let doc = new DOMParser().parseFromString(data, "text/html");
  // let nodes = xpath.select(path, doc);
  
  return res.json(data);
};

router.get('/', async (req, res) => {
  const params = req.query;

  return fetchSource(params, res);
});

module.exports = router;
