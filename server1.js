var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("Welcome User");
}).listen(3000);
console.log("Server has been created successfully!");