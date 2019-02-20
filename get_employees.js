const 
display = require("./employee_schema");

const show = ((req,res,next)=>{
    
    display.emp.find((err , found)=>{
        if(err){
            console.log(err);
        }
        else if(!found){
            res.status(404).json({
                message  :"no results found!!"
            });
        }
        else{
            res.status(200).json({
                employees : found
            });
        }
    });
});

module.exports = {
    show
}