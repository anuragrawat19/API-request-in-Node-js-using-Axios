const express=require("express")
const app =express()
const fs= require("fs")



// get method for getting http resourse in restful structure
app.get("/listUsers",function(req,res){
        fs.readFile(__dirname+"/users.json",function(err,data){
            res.end(data);
            
        })
})





// post method for adding a new user in the resourse 
user={"user6":{
    "name":"anurag",
    "password":"neverevercomeback",
    "profession":"programmer",
    "id":6
}
}

app.post("/addUser",function(req,res){
    fs.readFile(__dirname+"/users.json",function(err,data){
        data=JSON.parse(data);
        data["user6"] = user["user6"];
        console.log( data );
        fs.writeFile(__dirname+"/users.json",JSON.stringify(data,null,2))
        return res.json(data)
    })


})

// geting the details of a particular user corresponding to the ID


app.get("/listUsers/userid:id",function(req,res){
    fs.readFile(__dirname+"/users.json",function(err,data){
        var users=JSON.parse(data)
        var user=users["user"+req.params.id]
        console.log(user)
        res.end(JSON.stringify(user,null,4))
    })
})


//deleting the  user details from a json file using Delete method

app.delete("/listUsers/deleteUser:id",function(req,res){
    //first read the existing file
    fs.readFile(__dirname+"/users.json",function(err,data){
        data=JSON.parse(data)
        delete data["user"+req.params.id]
        data1=JSON.stringify(data,null,4)
        console.log(data)
    fs.writeFile(__dirname+"/users.json",data1)
        res.json(data)

    })
})



const PORT =8000;

app.listen(PORT,()=>{
    console.log(" App is listening at http://localhost:"+PORT)
})