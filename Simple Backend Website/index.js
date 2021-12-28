const http=require('http');
const fs=require('fs');
const home=fs.readFileSync('./home.html');
 const about=fs.readFileSync('./about.html');
const service=fs.readFileSync('./service.html');
const contact=fs.readFileSync('./contact.html');
 const server=http.createServer((req,res)=>{
      url=req.url;
     res.writeHead(200,{'Content-type':'text/html'});
     if(url=='/')
     res.end(home);
     else if(url=='/about')
     res.end(about);
     else if(url=='/service')
     res.end(service)
     else if(url=='/contact')
     res.end(contact)
     else{
         res.statusCode=404;
         res.end("<h1>404 The Page is Not Found</h1>");
     }
 });
server.listen(80,'127.0.0.1',()=>{
    console.log("The server is running go check it out");
});