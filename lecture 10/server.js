const express = require('express');
const app = express();

const employees = [
    { empId: 1, name: "Alex", salary: 10000, department: "IT" },
    { empId: 2, name: "Anu", salary: 2000, department: "HR" },
    { empId: 3, name: "Anushka", salary: 40000, department: "FINANCE" },
    { empId: 4, name: "Anzy", salary: 70000, department: "sales" }
];

app.get("/employees", (req, res) => {
    res.json(employees);
});

app.get("/employees/:id", (req, res) => {
    const id = req.params.id;

    const employee = employees.find(
        employee => employee.empId === Number(id)
    );

    if (!employee) {
        return res.status(404).json({
            success: false,
            message: "Employee not found"
        });
    }

    res.json({
        success: true,
        employee
    });
})

    app.post("/employees",(req,res)=>{
        const employee = req.body;
        employees.push({empId:employees.length+1,...employee});//add
        res.json({success:true,employee});
    })


    app.put("/employees/:id",(req,res)=>{
        const id=req.params.id;
        const employee=req.body;
        const result=employees.find((employee)=>employee.empId===Number
        (id));
        if(!result){
            res.status(404).json({success:false,message:"employee not found"});
        }

        result.name = employee.name;
        result.salary = employee.salary;
        result.department = employee.department;
        res.json({success:true,employee});

    })


    // delete

    app.delete("/employees/:id",(req,res)=>{
        const id = req.params.id;
        const result=employees.find((employee)=>employee.empId===Number
        (id));
        if(!result){
            res.status(404).json({success:false,message:"employee not found"});
        }
        employees.splice(id-1,1);
        res.json({success:true,result});
    })

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});