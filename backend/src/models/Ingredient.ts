import { DataTypes } from 'sequelize';
import { sequelize } from '../db/mongo';

export const Ingredient = sequelize.define('Ingredient', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ocrText: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.ENUM('allergen', 'hazardous', 'safe', 'unknown'),
        allowNull: false,
        defaultValue: 'unknown'
    }
}, {
    tableName: 'ingredients',
    timestamps: true
});
