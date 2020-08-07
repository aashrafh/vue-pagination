const { Router } = require("express");
const faker = require("faker");
const Article = require("../models/Article");

const router = Router();

router.get("/create", async (req, res) => {
  for (let i = 0; i < 100; i++) {
    await Article.create({
      title: faker.name.title(),
      description: faker.lorem.paragraph(),
      imageURL: faker.image.imageUrl()
    });
  }

  res.json({ message: "100 articles are created successfully" });
});

router.get("/articles", async (req, res) => {
  const articles = await Article.find();
  res.json({ articles });
});

module.exports = router;
