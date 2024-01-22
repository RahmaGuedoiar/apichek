const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const app=express();
app.use(express.json())
const Port =process.env.Port

console.log(Port)
mongoose.connect(process.env.uRL)  .then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })
  app.use('/api',require("./Routes/UserRoutes"))
  app.listen(Port,(err)=>{err?console.log(err):console.log("serveur is rining in " +Port)})


