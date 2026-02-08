const express = require("express");
const app = express();
const port = 3000;

app.get('/user/:id', (req, res) => {
  if (!/^\d+$/.test(req.params.id)) {
    return res.status(400).send("Only numbers allowed");
  }
  res.send(`User ID: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
