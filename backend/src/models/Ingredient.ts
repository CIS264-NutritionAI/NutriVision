import { Model, DataTypes, Sequelize } from "sequelize";

export interface IngredientAttributes {
  id?: number;
  name: string;
  isAllergen: boolean;
}

export class Ingredient extends Model<IngredientAttributes> implements IngredientAttributes {
  public id!: number;
  public name!: string;
  public isAllergen!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initialize(sequelize: Sequelize) {
    Ingredient.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isAllergen: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        tableName: "ingredients",
        sequelize,
      }
    );
  }
}
