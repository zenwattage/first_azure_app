const mongoose = require('mongoose');

//db model
const ThoughtSchema = mongoose.Schema({
    thought: String,
    dateCreated: Date,
});

//model for the DB
const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;