//import the require dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const session = require('express-session');
const cookieParser = require('cookie-parser');
//used for file upload
const cors = require('cors');

const { response } = require('express');



app.use(express.json());
//use cors to allow cross origin resource sharing
app.use(
    cors({
        origin: 'http://localhost:3000', 
        methods: ["GET", "POST"],
        credentials: true
    })
);

//Allow Access Control
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));


const csvjson = require('csvjson');
const { count, Console } = require('console');
const readFile = require('fs').readFile;

 


//get Agriculture production
app.post("/getAgriculture", (req,res)=>{
  console.log(req.body)
  let data = req.body.selectedOption;
  var abc = [];
  var filename = "";
  var country =""
  if (req.body.selectedOption =='INDIA')
{
  country="India";
filename = "\agriculture.csv"

}  
if (req.body.selectedOption =='USA' )
{
  country='United States';
filename = "\agriculture.csv"

}  
if (req.body.selectedOption =='CHINA' )
{
  country="China";
filename = "\agriculture.csv"

}  
 
readFile(filename, 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
     //   throw new Error(err);
     res.writeHead(201,{
      'Content-Type' : 'text/plain'
  })
  res.end("Unsuccessful Login");
        
    }
    else{
      res.writeHead(200,{
        'Content-Type' : 'application/json'
    });

    const jsonObj = csvjson.toObject(fileContent);
    const data = jsonObj;
    console.log(data)
    //csvjson doesnt parse data correctly
    const finalData = [];
    const pie= [];
    const weird=[];
        pie.push(['Country','Tonnes'])
        weird.push(['Year',country])
        for (var i = 0; i < data.length; ++i) {
            if(1==1){
                //console.log(data[i].Year);
                //console.log("heeeeeeeeeere")
                //console.log(data[i]);
                //console.log(data[i]['﻿Country Name']);
               // console.log("heeeeeeeeeere")
                //console.log(data[i]['Partner Countries']);
                //console.log()
                if(data[i]['﻿Country Name']=='Croatia'){
                  for (var x = 0; x < data[i].length; ++x) {
                    console.log("afdafd")
                    console.log(x)
                    console.log(data[i][x])
                  weird.push([data[i][i],parseInt(data[i][i])])
                  console.log("afdafd")
                  }
                 // pie.push([data[i]['Partner Countries'],parseInt(data[i]['Flag'])])
                }else{
                  // /weird.push([req.body.country,data[i]['Partner Countries'],parseInt(data[i]['Value'])])
                  //pie.push([data[i]['Partner Countries'],parseInt(data[i]['Value'])])
                }
                
               // console.log(data[i].Reporter Country);
             
            }
         }
         finalData.push(pie,weird)
         console.log(finalData)
    //console.log(jsonObj);
    //console.log("Books : ",JSON.stringify(jsonObj));
    //res.end("succesful Login");
    res.end(JSON.stringify(finalData));
  }
});
});






  


//get import/export
app.post("/importexport", (req, res)=> {
  let user = req.query.user;
  console.log(req.body)
 var filename = "";
  if (req.body.country =='Saudi' && req.body.grain=='Wheat')
{
filename = "\saudiwheat.csv"

}  
if (req.body.country =='Saudi' && req.body.grain=='rice')
{
filename = "\saudirice.csv"

}  
if (req.body.country =='Egypt' && req.body.grain=='rice')
{
filename = "\legyptrice.csv"

}  
if (req.body.country =='Egypt' && req.body.grain=='Wheat')
{
filename = "\legyptwheat.csv"

}  
readFile(filename, 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
     //   throw new Error(err);
     res.writeHead(201,{
      'Content-Type' : 'text/plain'
  })
  res.end("Unsuccessful Login");
        
    }
    else{
      res.writeHead(200,{
        'Content-Type' : 'application/json'
    });

    const jsonObj = csvjson.toObject(fileContent);
    const data = jsonObj;
    console.log(data)
    //csvjson doesnt parse data correctly
    const finalData = [];
    const pie= [];
    const weird=[];
        pie.push(['Country','Tonnes'])
        weird.push(['From','to','Weight'])
        for (var i = 0; i < data.length; ++i) {
            if(data[i]['Year'].replace(/\D/g,'') == req.body.year.label){
                //console.log(data[i].Year);
                console.log(data[i].Value);
                //console.log(data[i]['Partner Countries']);
                if(req.body.grain=='rice'){
                  weird.push([req.body.country,data[i]['Partner Countries'],parseInt(data[i]['Flag'])])
                  pie.push([data[i]['Partner Countries'],parseInt(data[i]['Flag'])])
                }else{
                  weird.push([req.body.country,data[i]['Partner Countries'],parseInt(data[i]['Value'])])
                  pie.push([data[i]['Partner Countries'],parseInt(data[i]['Value'])])
                }
                
               // console.log(data[i].Reporter Country);
             
            }
         }
         finalData.push(pie,weird)
         console.log(finalData)
    //console.log(jsonObj);
    //console.log("Books : ",JSON.stringify(jsonObj));
    //res.end("succesful Login");
    res.end(JSON.stringify(finalData));
  }
});

});

//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");9