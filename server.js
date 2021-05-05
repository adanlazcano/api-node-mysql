import express from 'express';
import connection from './config/database.js';
import morgan from 'morgan';
import cors from 'cors';
import Middleware from './middleware/Middleware.js';
import booksRoutes from './routes/Books.js';
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Connect to database
app.use(connection);

//Middlewares
app.use(morgan('dev'));
app.use(Middleware);
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/', booksRoutes);

//Handler to not found routes (next)

app.use((req, res) => {
    res.status(404).json({ error: 'not found' });
});


// Server running
app.listen(app.get('port'), _ => {
    try {
        console.log(`Server running on Port ${app.get('port')}`)
    } catch (error) {
        console.log(error);
    }
})