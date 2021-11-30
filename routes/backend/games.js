// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Game = require('../../models/Game');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send("I'm testing my games route with this nonsense! :)"));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Game.find()
        .then(tacos => res.json(tacos))
        .catch(err => res.status(404).json({ nogamesfound: 'No Games were found :(' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Game.findById(req.params.id)
        .then(nonsense => res.json(nonsense))
        .catch(err => res.status(404).json({ nogameatall: 'No game matches that ID' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Game.create(req.body)
        .then(book => res.json({ msg: 'Game was added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this game to the list' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body)
        .then(game => res.json({ msg: 'Game updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Game.findByIdAndRemove(req.params.id, req.body)
        .then(game => res.json({ mgs: 'Game entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;