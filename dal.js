'user strict';

var sql=require("./mysqlconnect");

var User=function(User)
{
    this.username=User.username;
    this.workshop=User.workshop;
    this.address=User.address;
    this.email=User.email;
    
   
};


User.getAllUser=function(result){
    sql.query("select * from users",function(err,res){
       if(err){
           console.log("error"+err);
           result(err,null);
       }else{
           console.log(res);
           //like return function:result back send server to client
           result(null,res);
       }
 
   });
 };


User.insertUser=function(newUser,result)
{
    var q="insert into workshop set ?";

    sql.query(q,newUser,function(err,res){
            if(err)
            {
                console.log("error : "+err);
                result(null,err);
            }
            else{
                console.log("result : "+res)
                result(null,res);
            }

  });

}
  
module.exports=User;