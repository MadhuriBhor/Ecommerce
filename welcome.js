var exp = require('express');

var app= exp();

app.listen(9000,function(){
	console.log("Server started on port 9000");
});

app.get('/welcome',function(req,res){
	res.send("<h2>Welcome to WebApp</h2>");
});
