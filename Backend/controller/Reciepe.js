import Reciepe from "../Models/Reciepe";

export const createRecipe = async (req, res) => {
  try {
    const { title, description, difficulty } = req.body;

    const recipe = await Reciepe.create({
      title,
      description,
      difficulty,
    });

    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Reciepe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, difficulty } = req.body;

    const recipe = await Reciepe.findByIdAndUpdate(
      id,
      { title, description, difficulty },
      { new: true }
    );

    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const recipe = await Reciepe.findByIdAndDelete(id);

    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
