const http = require('http');

const hostname = 'localhost';
const port=9090;

const server = http.createServer((req,res)=>{
	const a=1;
	const b=2;
	const c=a+b;
	res.statusCode= 200;
	res.setHeader('Content-Type','text/plain');
	res.end(`Value of c is ${c} \n`);
});
server.listen(port,hostname,()=>{
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log("Sum of two numbers");
    
});
