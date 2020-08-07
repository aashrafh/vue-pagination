const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/vue-pagination", {
    useNewUrlParser: true
  })
  .then(db => console.log(`DB is connected sucessfully`))
  .catch(err => console.log(err));
