const 
employee = require("./employee_schema");

const create = (req,res,next)=>{
    let emp = new employee.emp();
    emp.name = req.body.name;
    emp.email = req.body.email;
    emp.age = req.body.age;
    emp.gender = req.body.gender;
    emp.contact = req.body.contact;

    emp.save().then(()=>{
        res.status(200).json({
            message  : "employee information created successfully!!"
        });
    }).catch((err)=>{
        console.log(err);
    });
}
module.exports ={
    create
}