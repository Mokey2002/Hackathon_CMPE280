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

 
var GDP= "";
//var finalData=[];
var output=[];
var myitem = [];
readFile('\GDP USD - API_NY.GDP.MKTP.CD_DS2_en_csv_v2_3263806.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
      GDP = csvjson.toObject(fileContent);

      output = GDP.map(Object.values);//array of objects is turned to array of arrays
      var samplearray=[];
    for (var i=0;i<output.length;i++){
    for(var j =0;j<output[i].length;j++){
      samplearray.push([parseFloat(output[i][j])]);//turn values to float
    }}
    //merge arrays within array to match format
    for(var i =0;i<samplearray.length;i=i+4){
      myitem.push([...samplearray[i],...samplearray[i+1],...samplearray[i+2],...samplearray[i+3]]);
    }
      myitem.splice(0,0,['Year','INDIA','CHINA','USA']);//add column headers at beggining of array   
});
var GDP1= "";
//var finalData=[];
var output1=[];
var myitem1 = [];
readFile('\GDP Growth Rate -API_NY.GDP.MKTP.KD.ZG_DS2_en_csv_v2_3158928.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
      GDP1 = csvjson.toObject(fileContent);
      output1 = GDP1.map(Object.values);//array of objects is turned to array of arrays
      var samplearray=[];
    for (var i=0;i<output1.length;i++){
    for(var j =0;j<output1[i].length;j++){
      samplearray.push([parseFloat(output1[i][j])]);//turn values to float
    }}
    //merge arrays within array to match format
    for(var i =0;i<samplearray.length;i=i+4){
      myitem1.push([...samplearray[i],...samplearray[i+1],...samplearray[i+2],...samplearray[i+3]]);
    }
      myitem1.splice(0,0,['Year','INDIA','CHINA','USA']);//add column headers at beggining of array   
});

var GDP2= "";
//var finalData=[];
var output2=[];
var myitem2 = [];
readFile('\CurrentAccountBalance-API_BN.CAB.XOKA.GD.ZS_DS2_en_csv_v2_3158921 (1).csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
      GDP2 = csvjson.toObject(fileContent);
      output2 = GDP2.map(Object.values);//array of objects is turned to array of arrays
      var samplearray=[];
    for (var i=0;i<output2.length;i++){
    for(var j =0;j<output2[i].length;j++){
      samplearray.push([parseFloat(output2[i][j])]);//turn values to float
    }}
    //merge arrays within array to match format
    for(var i =0;i<samplearray.length;i=i+4){
      myitem2.push([...samplearray[i],...samplearray[i+1],...samplearray[i+2],...samplearray[i+3]]);
    }
      myitem2.splice(0,0,['Year','CHINA','INDIA','USA']);//add column headers at beggining of array   
});

var GDP3= "";
//var finalData=[];
var output3=[];
var myitem3 = [];
readFile('\Foreign direct investment, net (BoP, current US$) - API_BN.KLT.DINV.CD_DS2_en_csv_v2_3158846.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
      GDP3 = csvjson.toObject(fileContent);
      output3 = GDP3.map(Object.values);//array of objects is turned to array of arrays
      var samplearray=[];
    for (var i=0;i<output3.length;i++){
    for(var j =0;j<output3[i].length;j++){
      samplearray.push([parseFloat(output3[i][j])]);//turn values to float
    }}
    //merge arrays within array to match format
    for(var i =0;i<samplearray.length;i=i+4){
      myitem3.push([...samplearray[i],...samplearray[i+1],...samplearray[i+2],...samplearray[i+3]]);
    }
      myitem3.splice(0,0,['Year','CHINA','INDIA','USA']);//add column headers at beggining of array   
});

var GDP4= "";
//var finalData=[];
var output4=[];
var myitem4 = [];
readFile('\Foreign direct investment, net outflows (BoP, current US$) - BM.KLT.DINV.CD.WD (1).csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
      GDP4 = csvjson.toObject(fileContent);
      output4 = GDP4.map(Object.values);//array of objects is turned to array of arrays
      var samplearray=[];
    for (var i=0;i<output4.length;i++){
    for(var j =0;j<output4[i].length;j++){
      samplearray.push([parseFloat(output4[i][j])]);//turn values to float
    }}
    //merge arrays within array to match format
    for(var i =0;i<samplearray.length;i=i+4){
      myitem4.push([...samplearray[i],...samplearray[i+1],...samplearray[i+2],...samplearray[i+3]]);
    }
      myitem4.splice(0,0,['Year','CHINA','INDIA','USA']);//add column headers at beggining of array   
});

var GDP5= "";
//var finalData=[];
var output5=[];
var myitem5 = [];
readFile('\Foreign direct investment, net inflows (% of GDP) - API_BX.KLT.DINV.WD.GD.ZS_DS2_en_csv_v2_3159100 (1).csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
      GDP5 = csvjson.toObject(fileContent);
      output5 = GDP5.map(Object.values);//array of objects is turned to array of arrays
      var samplearray=[];
    for (var i=0;i<output5.length;i++){
    for(var j =0;j<output5[i].length;j++){
      samplearray.push([parseFloat(output5[i][j])]);//turn values to float
    }}
    //merge arrays within array to match format
    for(var i =0;i<samplearray.length;i=i+4){
      myitem5.push([...samplearray[i],...samplearray[i+1],...samplearray[i+2],...samplearray[i+3]]);
    }
      myitem5.splice(0,0,['Year','CHINA','INDIA','USA']);//add column headers at beggining of array   
});

var GDP6= "";
//var finalData=[];
var output6=[];
var myitem6 = [];
readFile('\FDI-NetOutflows(%ofGDP)- API_BM.KLT.DINV.WD.GD.ZS_DS2_en_csv_v2_3158853 (1).csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
      GDP6 = csvjson.toObject(fileContent);
      output6 = GDP6.map(Object.values);//array of objects is turned to array of arrays
      var samplearray=[];
    for (var i=0;i<output6.length;i++){
    for(var j =0;j<output6[i].length;j++){
      samplearray.push([parseFloat(output6[i][j])]);//turn values to float
    }}
    //merge arrays within array to match format
    for(var i =0;i<samplearray.length;i=i+4){
      myitem6.push([...samplearray[i],...samplearray[i+1],...samplearray[i+2],...samplearray[i+3]]);
    }
      myitem6.splice(0,0,['Year','CHINA','INDIA','USA']);//add column headers at beggining of array   
});

app.post("/getGDP", (req,res)=>{
  let data = req.body.selectedOption;
  var abc = [];
  if(data=='INDIA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem, 3);
    abc = removeEl(temp, 2);
    res.send(JSON.stringify(abc));
  }
  if(data=='CHINA'){

    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem, 1);
    abc = removeEl(temp, 2);   
    res.send(JSON.stringify(abc));
  }
  if(data=='USA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem, 1);
    abc = removeEl(temp, 1);    
    res.send(JSON.stringify(abc));
  }
  console.log(abc); 
});

app.post("/getGDP1", (req,res)=>{
  let data = req.body.selectedOption;
  var abc = [];
  if(data=='INDIA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem1, 3);
    abc = removeEl(temp, 2);
    res.send(JSON.stringify(abc));
  }
  if(data=='CHINA'){

    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem1, 1);
    abc = removeEl(temp, 2);   
    res.send(JSON.stringify(abc));
  }
  if(data=='USA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem1, 1);
    abc = removeEl(temp, 1);    
    res.send(JSON.stringify(abc));
  }
  console.log(abc); 
});

app.post("/getGDP2", (req,res)=>{
  let data = req.body.selectedOption;
  var abc = [];
  if(data=='INDIA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem2, 1);
    abc = removeEl(temp, 2);
    res.send(JSON.stringify(abc));
  }
  if(data=='CHINA'){

    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem2, 3);
    abc = removeEl(temp, 2);   
    res.send(JSON.stringify(abc));
  }
  if(data=='USA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem2, 1);
    abc = removeEl(temp, 1);    
    res.send(JSON.stringify(abc));
  }
  console.log(abc); 
});


app.post("/getGDP3", (req,res)=>{
  let data = req.body.selectedOption;
  var abc = [];
  if(data=='INDIA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem3, 1);
    abc = removeEl(temp, 2);
    res.send(JSON.stringify(abc));
  }
  if(data=='CHINA'){

    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem3, 3);
    abc = removeEl(temp, 2);   
    res.send(JSON.stringify(abc));
  }
  if(data=='USA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem3, 1);
    abc = removeEl(temp, 1);    
    res.send(JSON.stringify(abc));
  }
  console.log(abc); 
});



app.post("/getGDP4", (req,res)=>{
  let data = req.body.selectedOption;
  var abc = [];
  if(data=='INDIA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem4, 1);
    abc = removeEl(temp, 2);
    res.send(JSON.stringify(abc));
  }
  if(data=='CHINA'){

    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem4, 3);
    abc = removeEl(temp, 2);   
    res.send(JSON.stringify(abc));
  }
  if(data=='USA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem4, 1);
    abc = removeEl(temp, 1);    
    res.send(JSON.stringify(abc));
  }
  console.log(abc); 
});



app.post("/getGDP5", (req,res)=>{
  let data = req.body.selectedOption;
  var abc = [];
  if(data=='INDIA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem5, 1);
    abc = removeEl(temp, 2);
    res.send(JSON.stringify(abc));
  }
  if(data=='CHINA'){

    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem5, 3);
    abc = removeEl(temp, 2);   
    res.send(JSON.stringify(abc));
  }
  if(data=='USA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem5, 1);
    abc = removeEl(temp, 1);    
    res.send(JSON.stringify(abc));
  }
  console.log(abc); 
});



app.post("/getGDP6", (req,res)=>{
  let data = req.body.selectedOption;
  var abc = [];
  if(data=='INDIA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem6, 1);
    abc = removeEl(temp, 2);
    res.send(JSON.stringify(abc));
  }
  if(data=='CHINA'){

    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem6, 3);
    abc = removeEl(temp, 2);   
    res.send(JSON.stringify(abc));
  }
  if(data=='USA'){
    function removeEl(array, remIdx){
      return array.map(function(arr){
        return arr.filter(function(el,idx){return idx!== remIdx});
      });
    };
    var temp = removeEl(myitem6, 1);
    abc = removeEl(temp, 1);    
    res.send(JSON.stringify(abc));
  }
  console.log(abc); 
});

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