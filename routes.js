const
create = require("./create_employee"),
display = require("./get_employees");
module.exports = (express)=> {
    const api = express.Router();
   // console.log("checking");
    api.post("/create_employee" , create.create);
    api.get("/display_employees" , display.show);
    api.get('/me', (req, res, next)=> {
        res.json({
            success: true, 
            status: "200",
            message: 'this is testing response'
        });
    });     
   return api;
}