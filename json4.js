const fs =require("fs");
const employee = require("./employee.json");
 let employee1 ={
    name: "Manaf", 
	age:25,
	emp_id:"43258"
};
let employee2 ={
	name: "Navya",
	age:26,
	emp_id:"75609"
};
employee.push(employee1);
employee.push(employee2)

fs.writeFile("employee.json",JSON.stringify(employee), err =>{
	if (err) throw err;
	console.log("Done writing");
});
fs.readFile("employee.json", function(err, data){
	if (err) throw err;
	const employee=JSON.parse(data);
	console.log(employee);
});


