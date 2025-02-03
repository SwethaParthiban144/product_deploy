const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productrouter = require('./routes/productroutes')

app.use(express.json())

app.listen('5000',()=>{console.log('Server is running on 5000')})


mongoose.connect('mongodb+srv://2216121:Swetha144@mycluster.ivc0s.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
.then(()=> console.log('database has been connected'))
.catch((err)=>console.log(err))

app.use("",productrouter)




// app.get('/',(req,res)=>{
//     res.send('server is sending this response')
// })
console.log("new comment added")
