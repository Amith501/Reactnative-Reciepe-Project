import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  difficulty: {
    require: true,
    enum: ["easy", "medium", "hard"],
    default: "easy",
    type: string,
  },
});

export default Recipe = mongoose.model("recipe", RecipeSchema);
