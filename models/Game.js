const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "This is a mediocre game, they don't even describe it"
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Game = mongoose.model('game', GameSchema);