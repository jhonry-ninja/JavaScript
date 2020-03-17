// All necessary requires, such as the Quote model.
// module.exports = {
//     index: function(req, res) {
//     	// code...
//     },
//     create: function(req, res) {
//     	// code...
//     },
//     destroy: function(req, res) {
//     	// code...
//     }
// };



var mongoose = require("mongoose");
var Quote = mongoose.model("Quote");
var moment = require("moment");

module.exports = {

    index: function(req, res){
        console.log(":: Root :: ");
        res.render("index");
    },

    quotePage: function(req, res){
        console.log(":: Get! :: ");
        Quote.find({}, function(err, quotes) {
            if(err){
                console.log(":: Error matching DB request... :: ");
            }
            else {
                res.render("quotes", {info: quotes, moment: moment});
            }
        }).sort({_id:-1});
    },

    addQuote: function(req, res){
        console.log(":: Post :: ", req.body);
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err){
            if(err){
                console.log(":: Error: something's not right! :: ", err);
                for(var key in err.errors){
                    req.flash("quoteform", err.errors[key].message);
                }
                res.redirect("/");
            }
            else{
                console.log(":: Done added a quote! :: ");
                res.redirect("/quotes");
            }
        })
    }
}