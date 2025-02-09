const Recipe = require("../models/recipe");
const recipeController = {
  postRecipe: async (req, res) => {
    try {
      const { title, description, ingredients } = req.body;
      const newRecipe = new Recipe({ title, description, ingredients });
      await newRecipe.save();
      res.status(201).send("creation success");
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  getRecipes: async (req, res) => {
    try {
      const recipe = await Recipe.find();
      console.log(recipe);
      res.status(201).json(recipe);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  getRecipe: async (req, res) => {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findById(id);
      res.status(201).json(recipe);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  updateRecipe: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, ingredients } = req.body;
      const recipe = await Recipe.findByIdAndUpdate(id, {
        title,
        description,
        ingredients,
      });
      res.status(201).send("updated successfully");
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      const { id } = req.params;
      const recipe = await Recipe.findByIdAndDelete(id);
      res.status(201).send("deleted successfully");
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};

module.exports = recipeController;
