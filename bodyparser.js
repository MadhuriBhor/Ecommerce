var exp = require('express');
var bodyParser = require('body-parser');

var app = exp();
app.use(bodyParser.urlencoded({'extended':false}));

app.get('/login.html',function(req,res){
     res.sendFile(__dirname+"/login.html");
});

app.post('/logincheck',function(req,res){
	if(req.body.uid == 'maddyb' && req.body.pwd == 'maddy@1998')
		res.send("Successful login");
	else
		res.send("Failed login");	
});

app.listen(9000,function(){
	console.log("Server started at 9000");
});