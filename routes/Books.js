import express from 'express';
import { getBooks, insertBook, getBook, updateBook, deleteBook } from '../controllers/Books.js';
const booksRoutes = express.Router();

booksRoutes.get('/books', getBooks);
booksRoutes.post('/books', insertBook);
booksRoutes.get('/books/:id', getBook);
booksRoutes.put('/books/:id', updateBook);
booksRoutes.delete('/books/:id', deleteBook);

export default booksRoutes;