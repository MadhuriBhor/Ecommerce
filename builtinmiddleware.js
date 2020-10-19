var exp = require('express');
var app = exp();

app.use(exp.static('images'));
app.use(function(req,res,next)
{
	var d=new Date();
	console.log("request received at"+d.toString()+"for"+req.url);
	next();
});
app.get('/login.html',function(req,res){
	res.send("<img src=Desert.jpg width='300' height='400' />");
});

app.get('/images',function(req,res){
	res.send("<img src='Desert.jpg' width='300' height='400'/>");
});
app.listen(9000,function(){
	console.log("Server started at 9000");
});