var http=require('http');
var express=require('express');
const app=express();
var path=require("path");
var bodyParser=require('body-parser');
var staticFolder=express.static(path.join(__dirname,"./public"));
app.use(staticFolder);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get("/",function(request,response){
    response.sendFile(path.join(__dirname,"./public/index"));
});

const routes=require('./router')
routes(app);

app.listen(9000);
console.log("Server is running at port 9000");