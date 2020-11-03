const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    id: {
        type: String,
        required:true
    },
    rating: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required:true
    }
})

const Game = mongoose.model("games", GameSchema)

module.exports = {
  Game
}
