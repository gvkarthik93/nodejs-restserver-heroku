var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

//var retrieveData = require('./restdatalayer.js');

// views is directory for all template files
/*app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
*/
app.get('/', function(request, response) {
  //var result  = retrieveData.level(27);
  //console.log(result);
  response.render('public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get('/getProductData', function (req, res) {
   //req.query.unique_id
   //console.log(req.query.username);
   console.log(req.query.product_id);
   console.log("HOLA");
   var productData = {"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
    ]};
/*
    for (var key in productData) {
    	var value  = productData[key];
    	for (var i=0;i<3;i++)
    	{
    		var fullname = "";
    		for(var name in value[i]) 
    		{
    			var nameValue = value[i][name];
    			fullname = fullname + nameValue;
    		}
    		if (fullname == req.query.username)
    		{
    			console.log("Successful Bitch!");
    		}
    	}
    }*/
   res.json(productData);
})

// This responds to types of requests
app.get("/getSimpleData", function(req, res) {
});

app.post("/getData", function(req, res) {
});

app.put("/api/contacts/:id", function(req, res) {
});

app.delete("/api/contacts/:id", function(req, res) {
});