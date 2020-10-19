var exp = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = exp();
app.use(bodyParser.urlencoded({'extended':false}));
app.use(session({'secret':'Secretkey'}));

app.get('/login.html',function(req,res){
     res.sendFile(__dirname+"/login.html");
});

app.post('/logincheck',function(req,res){
	if(req.body.uid == 'maddyb' && req.body.pwd == 'maddy@1998')
	{
		//res.send("Successful login");
		req.session.uid = req.body.uid;
		res.redirect('/welcomepage');
	}
	else
		res.send("Failed login");	
});

app.all('/welcomepage',function(req,res){
	if(req.session.uid)
		res.send("<h2>Welcome "+req.session.uid+"</h2>");
	else
		res.send("<h2>Welcome guest</h2>");
});

app.listen(9000,function(){
	console.log("Server started at 9000");
});