//1. importing 
const http=require('http');
const fs=require('fs');
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const expressHbs=require('express-handlebars');


//2.local import
const adminRoutes=require('./routes/admin.js');
const shopRoute=require('./routes/shop.js');
const errorController=require('./controllers/error')

//3.gobal constants
const app=express(); // express impoted is function
const PORT=3000;


app.set('view engine','ejs'); //setting view eninr to ejs 
app.set('views','views'); // to look for ejs file in views folder
 

app.use((req,res,next)=>{
   console.log(req.url);
   // console.log(req.method);
   next();
})


// body parsing {install body-parser for that as production} 
app.use(bodyParser.urlencoded({extended:false}));

//adding static file access for public foldera
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes); // this put all admin routers here
app.use(shopRoute); // this put all shoproutes routers here
 
//404
app.use('/',errorController.get404);


app.listen(PORT,(err)=>{ 
   console.log("server is running on port",PORT);
});
