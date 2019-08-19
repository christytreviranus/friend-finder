//Dependencies
const path = require("path");

module.exports = function(app){

    //Route for Home
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //Route for Survey
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};






