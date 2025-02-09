const express = require("express");

const {
  postRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const recipeRouter = express.Router();

recipeRouter.get("/", getRecipes);
recipeRouter.get("/:id", getRecipe);
recipeRouter.post("/", postRecipe);
recipeRouter.put("/:id", updateRecipe);
recipeRouter.delete("/:id", deleteRecipe);

module.exports = recipeRouter;
