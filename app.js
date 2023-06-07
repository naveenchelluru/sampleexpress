const  express=require("express")

const app=express()

app.listen(3000,()=>{
    console.log("server is running sucessfully");
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.route("/login").get((req,res)=>{
    res.sendFile(__dirname+"/login.html")
})
.post((req,res)=>{
    res.redirect("/")
})


app.route("/register").get((req,res)=>{
    res.sendFile(__dirname+"/register.html")
})
.post((req,res)=>{
    res.redirect("/")
})