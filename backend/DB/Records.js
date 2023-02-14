const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
    "service":String,
    "slot":String,
    "mynumber":String,
    "tokennumber":String
});

module.exports = mongoose.model("Records",RecordSchema);