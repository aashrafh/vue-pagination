const { Schema, model } = require("mongoose");

new ArticleSchema({
  title: String,
  description: String,
  imageURL: String
});

module.exports = model("Article", ArticleSchema);
