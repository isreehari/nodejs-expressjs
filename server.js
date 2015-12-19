var app = require('./src/app');

/*
* Start the server
*/

app.listen(process.env.PORT || 3000,function(req,res){

   console.log("Server is listening at 3000");

});
