var exp = require('express');
var cookieParser = require('cookie-parser');

var app = exp();
app.use(cookieParser());

app.get('/create',function(req,res){
	res.cookie("loginerror","Invalid ID/Password");
	res.send("Cookie is created <br/><a href='view'>View cookie</a>");
});

app.get('/view',function(req,res){
	if(req.cookies.loginerror)
		res.send("Cookie name: "+req.cookies.loginerror+"<br/><a href='delete'>Delete cookie</a>");
	else
		res.send("Cookie not available");
});

app.get('/delete',function(req,res){
	res.clearCookie("loginerror");
	res.send("Cookie deleted <br/> <a href='view'> Verify? </a>");
});

app.listen(9000,function(){
	console.log("Server started at 9000");
});