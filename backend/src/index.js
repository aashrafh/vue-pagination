require("./database");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server is running at ${port} port`);
});
