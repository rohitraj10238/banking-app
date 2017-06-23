var express = require('express');
var path = require('path');



var app = express();
console.log("path" ,__dirname);
app.use(express.static(path.resolve(__dirname + './../frontend/views')));

app.use(express.static(path.resolve(__dirname + './../frontend')));

console.log(path.resolve(__dirname +'./../frontend'),">>>>>")


app.get('/' , function(req,res){
res.render('index.html');
});
app.get('/login',function(req,res){

if(req.query.name=="rohit" && req.query.pass=="1234"){
res.json({
name:'rohit',
phone:'8860675181',
age:25,
des:'Engineer'



})



}
else{
res.send("incorrect Details");

}
})
app.listen(9000,function(){

	console.log(">>>>>server is listening")

});


