const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://dharshansri:Dharshanh30708@cluster0.z64sb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})
