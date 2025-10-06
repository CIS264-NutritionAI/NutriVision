import express from 'express';
import * as dotenv from 'dotenv';
import { sequelize } from './db/mongo';
import ingredientRoutes from './routes/ingredients';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/ingredients', ingredientRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Database connected.');
        return sequelize.sync(); 
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
