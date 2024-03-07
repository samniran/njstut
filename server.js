const http = require("http");
const port=8080;
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h2>hey server stopped and started</h2>");
    res.end;
})
.listen(port,()=>{
    console.log(`Server running at ${port}`);
})