let http = require('http');
let fs = require('fs');

let handleRequest= (request, response)=>{
	response.writeHead(200,{
		'Content-Type':'text/plain'
	})
	const server = http.createServer((req,res)=>{
	const a=5;
	const b=2;
	const c=a+b;
	
	res.end(`Value of c is ${c} \n`);
	});
};
http.createServer(handleRequest).listen(8000);

