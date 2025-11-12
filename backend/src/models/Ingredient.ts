import mongoose from 'mongoose'; 
const { Schema } = mongoose; 

// What an ingredient looks like 
interface IngredientAttributes {
  _id: string; 
  name: string; 
  isAllergen: boolean; 
  createdAt: Date; 
  updatedAt: Date; 
}

const ingredientSchema = new mongoose.Schema<IngredientAttributes>({ 
  name: { 
    type: String, 
    required: true,
  }, 
  isAllergen: { 
    type: Boolean, 
    required: true,
  },
}, {
  timestamps: true, // Adds "createdAt and updatedAt"
});

// Create a model from the schema 
const Ingredient = mongoose.model<IngredientAttributes>('Ingredient', ingredientSchema)

// Export model to use throughout application 
export default Ingredient;
