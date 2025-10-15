import app from "#app";

const express = require("express") // importing the express framework
const app = express() // create the express app

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
