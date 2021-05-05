export const getBooks = (req, res) => {
    try {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)

            conn.query('SELECT * FROM books', (err, rows) => {
                if (err) return res.send(err)

                res.json(rows);
            });
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const insertBook = (req, res) => {

    try {
        req.getConnection((err, conn) => {
            if (err) return res.status(500).send(err)

            conn.query('INSERT INTO books set ?', [req.body], (err, rows) => {
                if (err) return res.status(500).send(err)

                res.json({ message: 'Book saved successfully' })
            })
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const getBook = (req, res) => {

    try {
        req.getConnection((err, conn) => {
            if (err) return res.status(500).send(err)

            conn.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, row) => {
                if (err) return res.status(500).send(err)

                res.json(row[0])
            })
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const updateBook = (req, res) => {

    try {
        req.getConnection((err, conn) => {
            if (err) return res.status(500).send(err)

            conn.query('UPDATE books SET ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
                if (err) return res.status(500).send(err)

                res.json({ message: 'Book updated successfully' })
            })
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const deleteBook = (req, res) => {

    try {
        req.getConnection((err, conn) => {
            if (err) return res.status(500).send(err)

            conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows) => {
                if (err) return res.status(500).send(err)

                res.json({ message: 'Book deleted successfully' })
            })
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}