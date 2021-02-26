'user strict';
var controller=require("./controllers/controller");
var registerController=require("./controllers/registerController");


module.exports=function(app)
{
   app.route("/list")
      .get(controller.getAll);

   app.route("/register")
       .post(registerController.storeDetails)

};



module.exports=function(app)
{
      app.route("/register")
            .post(registerController.storeDetails)



};

