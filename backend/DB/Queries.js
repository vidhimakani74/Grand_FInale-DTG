const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema({
   name:String,
   number:String,
   msg:String
    
});

module.exports = mongoose.model("Queries",QuerySchema);
