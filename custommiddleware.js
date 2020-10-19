var exp = require('express');
var fs = require('fs');
var app = exp();

app.use(function(req,res,next)
{
	var d=new Date();
	console.log("request received at"+d.toString()+"for"+req.url);
	next();
});

app.use('/login',function(req,res,next){
	res.send("<h1>Login Page</h1>");
});

app.listen(9000,function(){
	console.log("Server started at 9000");
});