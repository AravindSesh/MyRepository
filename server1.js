var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Hello World");
}).listen(3000);
console.log("Server created successfully!");