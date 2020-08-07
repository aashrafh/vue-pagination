const express = require("express");
require("./database");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port} port`);
});
