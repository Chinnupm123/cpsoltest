let http = require('http');
let fs = require('fs');
const hostname = '127.0.0.1';
let handleRequest= (request, response)=>{
	response.writeHead(200,{
		'Content-Type':'text/txt'
	})
	fs.readFile('./text.txt',null, function(error,data){
		if (error){
			response.writeHead(404);
			response.write('file not found');
		}else{
			
		response.write(data);
		}
        response.end();
	});
};
http.createServer(handleRequest).listen(8081);