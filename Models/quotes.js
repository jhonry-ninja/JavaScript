// const QuoteSchema = new mongoose.Schema({
// 	quote: {type: String, required: true, minlength:10},
// 	author: {type: String, required: true},
//         }, {timestamps: true })
// mongoose.model('Quote', QuoteSchema); 



var mongoose = require("mongoose");

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 10},
    }, {timestamps: true});

    mongoose.model("Quote", QuoteSchema);