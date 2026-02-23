const http=require('http');
const sum=require('./fetchData');
const {writeData,readData,deleteFile,copyFile,filereadASync}=require('./usefsmodule')
const PORT=4007;
const server=http.createServer( async(req,res)=>{
//     res.setHeader('Content-Type','text/html');
// res.end("<h2 style=color:red>Hello, Welcome to Node Server</h2>");
  res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
if(req.url=='/msg' && req.method=="GET"){
    res.setHeader('Content-Type','text/html');
    res.end("<h1>Welcome message from Node Server</h1>");
}

if(req.url=='/data' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=await sum();
     res.end(JSON.stringify({msg:sumData}))
   
}

if(req.url=='/writeData' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=writeData();
     res.end(JSON.stringify({msg:sumData}))
   
}
// if(req.url=='/data' && req.method=="POST"){
//    res.setHeader('Content-Type','application/json');
//     res.end(JSON.stringify({msg:"Post method for data insertion"})); 
// }
if(req.url=='/readData' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=readData();
     res.end(JSON.stringify({msg:sumData}))
   
}
if(req.url=='/deleteFile' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=deleteFile();
     res.end(JSON.stringify({msg:sumData}))
   
}
if(req.url=='/copyFile' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=copyFile();
     res.end(JSON.stringify({msg:sumData}))
   
}
if(req.url=='/filereadASync' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=await filereadASync();
     res.end(JSON.stringify({msg:sumData}))
   
}
if(req.url=='/register' && req.method=="POST"){
     let arr=[]
     let body=""
     req.on('data',chunk=>{
          body+=chunk
     })
     req.on('end',()=>{
          const {name,email,password}=JSON.parse(body);
          console.log(name)
     })
     res.setHeader('Content-Type','application/json');
     res.end(JSON.stringify({msg:"HI! I am creating register api"}))
   
}


})

server.listen(PORT,()=>{
    console.log(`Service is available at ${PORT}`)
})