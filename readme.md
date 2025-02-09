A complete CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and Mongoose.

Recipe Schema Documentation

1. Schema Overview
   This schema is designed to define the structure for storing recipes in a MongoDB database using Mongoose. Each recipe document will contain information about the title, description, ingredients, and timestamps for when the recipe is created and updated.

2. Fields and Data Types
   title (String)

Description: Represents the name of the recipe.
Required: true

description (String)

Description: Provides a detailed description of the recipe, explaining what the dish is and its key features.
Required: true

ingredients (Array of Objects)

Description: A list of ingredients required for the recipe, where each ingredient includes a name and quantity.
Required: Each ingredient object contains the following fields:
name (String): The name of the ingredient
quantity (String): The quantity of the ingredient

POSTMAN DOCUMENTATION URL:
https://documenter.getpostman.com/view/39779988/2sAYX9kzm3
