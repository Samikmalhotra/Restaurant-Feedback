const express = require("express")
const cors = require("cors")
const restaurants = require("./api/restaurants.routes.js")
const connectDB = require("./config/db")

const app = express();

connectDB();

app.use(cors())
app.use(express.json())

// app.get('/', (req,res)=>{
//     res.send('Hello World')
// })

app.use('/api/v1/restaurants', restaurants)
// app.use("*",(req,res)=>{
//     res.status(404).json({error:"Page not found"})
// })

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log('Server is up on port '+ PORT) 
});