const async = require('async');
function task1(){
	return new Promise((resolve) => {
	      setTimeout(() => {
			  console.log('task 1 completed');
			  resolve('result 1');
		  },2000);
    });
}
function task2(){
	return new Promise((resolve) => {
	      setTimeout(() => {
			  console.log('task 1 completed');
			  resolve('result 2');
		  },2000);
    });
}
		  
async function output() {
	try{
		const results=await async.parallel([
		task1,
		task2
		]);
	console.log('all task completed');
	}catch (err){
		console.error('Error:',err);
}}
output();
	