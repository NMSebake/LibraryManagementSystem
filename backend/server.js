const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Path to our JSON database
const DB_FILE = path.join(__dirname, 'db.json');

// Helper function to load data
function loadData() {
    const dataBuffer = fs.readFileSync(DB_FILE);
    return JSON.parse(dataBuffer.toString());
}

// Helper function to save data
function saveData(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// Get all books
app.get('/books', (req, res) => {
    const data = loadData();
    res.json(data.books)
}) 

// Get book by ID
app.get('/book/:id', (req, res) => {
    const data = loadData();
    const bookid = parseInt(req.params.id, 10);
    const book = data.books.find(c => c.id === bookid);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found'})
    }
});

// Add a new book
app.post('/books', (req, res) => {
    const data = loadData();
    const newBook = req.body;
    // id generation
    newBook.id = DataTransfer.now();
    data.books.push(newBook);
    saveData(data);
    res.status(201).json(newBook);
})

// Still need code for the members

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

