const async = require('async');
function file1(){
	return new Promise((resolve) => {
	      setTimeout(() => {
			  console.log('file 1 recieved');
			  resolve('result 1');
		  },2000);
    });
}
function file2(){
	return new Promise((resolve) => {
	      setTimeout(() => {
			  console.log('file 2 recieved');
			  resolve('result 2');
		  },2000);
    });
}
		  
async function output() {
	try{
		const results=await async.parallel([
		file1,
		file2
		]);
	console.log('all files recieved');
	}catch (err){
		console.error('Error:',err);
}}
output();
	